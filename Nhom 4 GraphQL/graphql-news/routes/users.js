var express = require('express');
var router = express.Router();

import UserModel from '../model/users';


router.get('/login', function (req, res, next) {
  res.render('login', {
    message: ""
  });
});

router.post('/login', function (req, res, next) {
  let name = req.body.username;
  let password = req.body.password;

  UserModel.find({ name: name, password: password }, function (err, rows) {
    if (err) res.json('Error');
    if (rows[0] == undefined) {
      res.render('login', {
        message: "Username or password invalid"
      });
    } else if (rows[0].role == 'MEMBER') {
      req.session.userId = rows[0]._id
      res.redirect('member');
    } else if (rows[0].role == 'ADMIN') {
      req.session.userId = rows[0]._id
      res.redirect('/');
    } else
      res.redirect('error');
  });

});

router.get('/member', function (req, res, next) {
  if (req.session.userId == undefined) {
    res.redirect('login');
    return;
  }
  res.render('member');
});

router.get('/admin', function (req, res, next) {
  if (req.session.userId == undefined) {
    res.redirect('login');
    return;
  }
  res.render('admin');
});





module.exports = router;
