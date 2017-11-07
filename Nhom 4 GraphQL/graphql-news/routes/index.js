var express = require('express');
var router = express.Router();

function checkLogin(session, res) {
  if (session == undefined) {
    res.redirect('/users/login');
    return;
  }
}

router.get('/', function (req, res, next) {
  checkLogin(req.session.userId, res);
  res.render('dashboard', { title: 'Express' });
});

router.get('/dashboard', function (req, res, next) {
  checkLogin(req.session.userId, res);
  res.render('dashboard', { title: 'Express' });
});

router.get('/user', function (req, res, next) {
  checkLogin(req.session.userId, res);
  res.render('user', { userId: req.session.userId });
});

router.get('/table', function (req, res, next) {
  checkLogin(req.session.userId, res);
  res.render('table', { userId: req.session.userId });
});

router.get('/create', function (req, res, next) {
  checkLogin(req.session.userId, res);
  res.render('create', { userId: req.session.userId });
});

router.get('/typography', function (req, res, next) {
  checkLogin(req.session.userId, res);
  res.render('typography', { title: 'Express' });
});

router.get('/icons', function (req, res, next) {
  checkLogin(req.session.userId, res);
  res.render('icons', { title: 'Express' });
});

router.get('/maps', function (req, res, next) {
  checkLogin(req.session.userId, res);
  res.render('maps', { title: 'Express' });
});

router.get('/notifications', function (req, res, next) {
  checkLogin(req.session.userId, res);
  res.render('notifications', { title: 'Express' });
});

router.get('/upgrade', function (req, res, next) {
  checkLogin(req.session.userId, res);
  res.render('upgrade', { title: 'Express' });
});

var fs = require('fs');
const fileUpload = require('express-fileupload');
router.use(fileUpload());


router.post('/uploader/upload', function (req, res, next) {
  console.log(req.files);
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  let sampleFile = req.files.upload;
  let fileName = req.files.upload.name;
  fileName = fileName.replace(/ /g, '_');
  sampleFile.mv('./uploads/images/' + fileName, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    var html = "";
    if (req.query.CKEditorFuncNum == undefined) {
      res.send("/images?image=" + fileName);
      return;
    }
    html += "<script type='text/javascript'>";
    html += "    var funcNum = " + req.query.CKEditorFuncNum + ";";
    html += "    var url     = \"/images?image=" + fileName + "\";";
    html += "    var message = \"Uploaded file successfully\";";
    html += "";
    html += "    window.parent.CKEDITOR.tools.callFunction(funcNum, url, message);";
    html += "</script>";

    res.send(html);
  });
});

router.get('/images', function (req, res, next) {
  console.log(req.query.image);
  let file = './uploads/images/' + req.query.image;

  var readFile = fs.readFileSync(file);
  res.end(readFile, 'binary');
});

//get image
router.get('/news/images', function (req, res, next) {
  let file = req.query.image;

  var readFile = fs.readFileSync(file);
  res.end(readFile, 'binary');
});

module.exports = router;
