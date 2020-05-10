var express = require("express");
var router = express.Router();
const passport = require("passport");
const crypto = require("crypto");
const mongo = require("../modules/MongoUtils");

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

router.post("/feed", (req, res) => {
  // console.log("THIS IS MY REQBODY",req.body);
  if (req.user) {
    req.body.user = req.user.username;
    req.body.availability = true;
    mongo.feeds.insert(req.body);
    res.redirect("/feed");
  }
  else res.redirect("/");
});

module.exports = router;

function genPassword(password) {
  var salt = crypto.randomBytes(32).toString("hex");
  var genHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    salt: salt,
    hash: genHash,
  };
}
