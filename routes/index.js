var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'IOT 2017 Cuenca' });
});


// PRACTICAS
// 
// 
// 
// router.get('/', function (req, res) {
//   res.send('Hola en express!')
// });


// router.post('/', function (req, res) {
//   res.send('Got a POST request')
// });




module.exports = router;
