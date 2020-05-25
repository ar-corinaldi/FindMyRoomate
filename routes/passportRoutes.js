const express = require("express");
const router = express.Router();
const passport = require("passport");
const crypto = require("crypto");
const mongo = require("../modules/MongoUtils");
const AWS = require("../S3Lib/s3");
const multer = require("multer");
const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, "");
  },
});
const upload = multer({ storage: storage });
/* GET users listing. */
router.get("/", function (req, res) {
  res.send("Ping prueba");
});

router.get("/login", function (req, res) {
  res.redirect("/");
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.post("/register", (req, res) => {
  console.log("Req del POST", req.body);
  if (req.body.password !== req.body.password2Register) {
    console.log("passwords are not equals");
    res.redirect("/");
  } else {
    const saltHash = genPassword(req.body.password);
    const salt = saltHash.salt,
      hash = saltHash.hash,
      correo = req.body.emailRegister,
      name = req.body.nameRegister,
      phone = req.body.phoneRegister;
    const newUser = {
      username: req.body.username,
      hash: hash,
      salt: salt,
      email: correo,
      name: name,
      phone,
    };
    mongo.users.insert(newUser).finally(() => {
      res.redirect(307, "/login");
    });
  }
});

router.get("/getUser", function (req, res) {
  console.log("req.user", req.user);
  const message = null;
  if (req.user) res.json(req.user);
  else res.json(message);
});

router.get("/loadFeed", (req, res) => {
  mongo.feeds.findAll().then((feeds) => {
    console.log("Feeds", feeds);
    res.json(feeds);
  });
});

router.post("/feed", upload.single("image"), async (req, res) => {
  console.log("req.file", req.file);
  if (req.user) {
    req.body.user = req.user.username;
    req.body.availability = true;
    const fileName = req.user.username + "_" + req.file.originalname;
    const fileContent = req.file.buffer;
    const data = await AWS.upload(fileName, fileContent); 
    req.body.image = data.Location;
    console.log(data.Location);
    mongo.feeds.insert(req.body).finally(() => res.redirect("/"));
  } else res.redirect("/");
});

router.get("/pageFeed/:pageNumber", (req, res) => {
  console.log(req.params);
  console.log(req.param);
  mongo.feeds.findAll(req.params.pageNumber, 10).then((data) => res.json(data));
});

router.get("/pagesFeed", (req, res) => {
  mongo.feeds.getPages().then((numPages) => res.json(numPages));
});

module.exports = router;

function genPassword(password) {
  const salt = crypto.randomBytes(32).toString("hex");
  const genHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    salt: salt,
    hash: genHash,
  };
}
