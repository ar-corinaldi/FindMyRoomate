const mongodb = require("mongodb");
// require("dotenv").config();
const MongoClient = mongodb.MongoClient;
function MongoUtils() {
  const mu = {};

  const ObjectId = mongodb.ObjectID;
  const DB_NAME = process.env.DB_NAME || "Error Database";
  let url = process.env.DB_URL || "mongodb://localhost:27017";

  // To change url server
  mu.url = (paramUrl) => {
    url = process.env.DB_URL || "mongodb://localhost:27017";
    if (paramUrl !== "") url = paramUrl;
  };

  // Connect to the DB
  mu.connect = () => {
    const options = { useUnifiedTopology: true, useNewUrlParser: true };
    const client = new MongoClient(url, options);
    return client.connect();
  };

  mu.users = {};

  mu.users.insert = (userData) => {
    return mu.connect().then((client) => {
      const usuarios = client.db(DB_NAME).collection("Users");
      const query = { username: userData.username };
      return usuarios
        .findOne(query)
        .then((user) => {
          if (!user) return usuarios.insertOne(userData);
        })
        .finally(() => client.close());
    });
  };

  mu.users.findByUsername2 = (username) => {
    return mu.connect().then((client) => {
      const users = client.db(DB_NAME).collection("Users");
      const query = { username };
      return users.findOne(query).finally(() => client.close());
    });
  };

  mu.users.findByUsername = (username, cb) => {
    return mu.connect().then((client) => {
      const users = client.db(DB_NAME).collection("Users");
      const query = { username };
      return users
        .findOne(query)
        .then((user, err) => {
          cb(err, user);
        })
        .finally(() => client.close());
    });
  };

  mu.users.findById = (_id, cb) => {
    return mu.connect().then((client) => {
      const users = client.db(DB_NAME).collection("Users");
      const query = { _id: ObjectId(_id) };
      return users
        .findOne(query)
        .then((user, err) => {
          cb(err, user);
        })
        .finally(() => client.close());
    });
  };

  mu.feeds = {};

  mu.feeds.getPages = () => {
    return mu.connect().then((client) => {
      const feeds = client.db(DB_NAME).collection("Feed");
      return feeds.estimatedDocumentCount().finally(() => client.close());
    });
  };

  mu.feeds.findAll = (pageNumber, nPerPage) => {
    if (!pageNumber) pageNumber = 1;
    if (!nPerPage) nPerPage = 9;
    return mu.connect().then((client) => {
      const feeds = client.db(DB_NAME).collection("Feed");
      const query = {};

      return feeds
        .find(query)
        .skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0)
        .limit(nPerPage)
        .toArray()
        .finally(() => client.close());
    });
  };

  mu.feeds.findByUsername = (user) => {
    return mu.connect().then((client) => {
      const feeds = client.db(DB_NAME).collection("Feed");
      let query = { user: user };
      return feeds
        .find(query)
        .toArray()
        .finally(() => client.close());
    });
  };

  mu.feeds.insert = (query) => {
    console.log("Query for posting a feed", query);
    return mu.connect().then((client) => {
      const feeds = client.db(DB_NAME).collection("Feed");
      console.log("THIS IS INSERT FEED", query);
      return feeds.insertOne(query).finally(() => client.close());
    });
  };

  mu.users.findAll = () => {
    return mu.connect().then((client) => {
      const users = client.db(DB_NAME).collection("Users");
      const query = {};
      return users
        .find(query)
        .toArray()
        .finally(() => client.close());
    });
  };

  mu.feeds.search = (text) => {
    return mu.connect().then((client) => {
      const feed = client.db(DB_NAME).collection("Feed");
      const query = { $text: { $search: text } };
      return feed
        .find(query)
        .toArray()
        .finally(() => client.close());
    });
  };

  mu.listenForChanges = () => {
    const col = "Feed";
    console.log("Listening to changes in the collection", col);
    return mu.connect().then((client) => {
      const cursor = client.db(DB_NAME).collection(col).watch();

      cursor.on("change", (data) => {
        console.log("Change in", col, data);
      });
    });
  };

  return mu;
}

module.exports = MongoUtils();
