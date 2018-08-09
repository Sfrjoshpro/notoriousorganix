var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'Notorious Organix',
     welcome: 'MAINE MADE'
     
    
    });
});
router.get('/Grow', function(req, res, next) {
  res.render('index', {
     title: 'Notorious Organix',
     welcome: 'Grow' 
     
    
    });
});
router.get('/Bloom', function(req, res, next) {
  res.render('index', {
     title: 'Notorious Organix',
     welcome: 'Bloom' 
     
    
    });
});
router.get('/Enhance', function(req, res, next) {
  res.render('index', {
     title: 'Notorious Organix',
     welcome: 'Enhance' 
     
    
    });
});
router.get('/Ingredients', function(req, res, next) {
  res.render('index', {
     title: 'Notorious Organix',
     welcome: 'Ingredients' 
     
    
    });
});
router.get('/Contacts', function(req, res, next) {
  res.render('index', {
     title: 'Notorious Organix',
     welcome: 'Contact & Info' 
     
    
    });
});


    
module.exports = router;
