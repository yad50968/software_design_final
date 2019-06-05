var express = require('express');
var pool = require('../middleware/database.js')
var router = express.Router();

var path = require('path');
var fs = require('fs')

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/log_in.html'))
});

// user login
router.post('/login', function(req, res){
    if(req.body.username == 'admin' && req.body.pass == 'admin'){
        //req.session.userName = req.body.username; // success session
        res.redirect('/');
    }
    else{
        res.json({ret_code : 1, ret_msg : '賬號或密碼錯誤'});// fail
    }
});

router.get('/information_page', function (req, res, next) {
  res.json({ 'information': 'value' });
})

router.get('/management_page', function (req, res, next) {
  res.json({ 'management': 'value' });
})

router.get('/calendar_page', function (req, res, next) {
  res.json({ 'calendar': 'value' });
})

router.get('/board_page', function (req, res, next) {
  res.json({ 'board': 'value' });
})

router.get('/fund_management_page', function (req, res, next) {
  res.json({ 'fund_management': 'value' });
})

router.get('/file_page', function (req, res, next) {
  res.json({ 'file': 'value' });
})

router.get('/member_page', function (req, res, next) {
  res.json({ 'member': 'value' });
})


module.exports = router;
