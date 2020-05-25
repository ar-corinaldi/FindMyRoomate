const mongodb = require("mongodb");
require("dotenv").config();
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
    return mu.connect()
      .then(client=>{
        const feeds = client.db(DB_NAME).collection("Feed");
        return feeds.estimatedDocumentCount()
          .finally(() => client.close());
      });
  };

  mu.feeds.findAll = (pageNumber, nPerPage) => {
    if(!pageNumber) pageNumber=1;
    if(!nPerPage) nPerPage = 10;
    return mu.connect().then((client) => {
      const feeds = client.db(DB_NAME).collection("Feed");
      const query = {};

      return feeds
        .find(query)
        .skip( pageNumber > 0 ? ( ( pageNumber - 1 ) * nPerPage ) : 0 )
        .limit(nPerPage)
        .toArray()
        .finally(() => client.close());
    });
  };

  mu.feeds.insert = (query) => {
    return mu.connect().then((client) => {
      const feeds = client.db(DB_NAME).collection("Feed");
      console.log("THIS IS INSERT FEED", query);
      return feeds.insertOne(query).finally(() => client.close());
    });
  };

  mu.users.findAll = () => {
    return mu.connect()
      .then(client => {
        const users = client.db(DB_NAME).collection("Users");
        const query = {};
        return users.find(query).toArray().finally( () => client.close() );
      });
  };

  return mu;
}

module.exports = MongoUtils();
