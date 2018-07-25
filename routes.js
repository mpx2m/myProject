var express = require("express");
var passport = require("passport");

var User = require("./models/user");
var router = express.Router();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.flash("info", "你必须登入才能查看此页面");
    res.redirect("/mongodbapp/login");
  }
}

router.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});

router.get("/mongodbapp", function(req, res, next) {
  User.find()
  .sort({ createdAt: "descending" })
  .exec(function(err, users) {
    if (err) { return next(err); }
    res.render("index", { users: users });
  });
});

router.get("/mongodbapp/login", function(req, res) {
  res.render("login");
});

router.post("/mongodbapp/login", passport.authenticate("login", {
  successRedirect: "/mongodbapp",
  failureRedirect: "/mongodbapp/login",
  failureFlash: true
}));

router.get("/mongodbapp/logout", function(req, res) {
  req.logout();
  res.redirect("/mongodbapp");
});

router.get("/mongodbapp/signup", function(req, res) {
  res.render("signup");
});

router.post("/mongodbapp/signup", function(req, res, next) {

  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username }, function(err, user) {

    if (err) { return next(err); }
    if (user) {
      req.flash("error", "用户已经存在");
      return res.redirect("/mongodbapp/signup");
    }

    var newUser = new User({
      username: username,
      password: password
    });
    newUser.save(next);

  });
}, passport.authenticate("login", {
  successRedirect: "/mongodbapp",
  failureRedirect: "/mongodbapp/signup",
  failureFlash: true
}));

router.get("/mongodbapp/users/:username", function(req, res, next) {
  User.findOne({ username: req.params.username }, function(err, user) {
    if (err) { return next(err); }
    if (!user) { return next(404); }
    res.render("profile", { user: user });
  });
});

router.get("/mongodbapp/edit", ensureAuthenticated, function(req, res) {
  res.render("edit");
});

router.post("/mongodbapp/edit", ensureAuthenticated, function(req, res, next) {
  req.user.displayName = req.body.displayname;
  req.user.bio = req.body.bio;
  req.user.save(function(err) {
    if (err) {
      next(err);
      return;
    }
    req.flash("info", "资料更新!");
    res.redirect("/mongodbapp/edit");
  });
});

module.exports = router;
