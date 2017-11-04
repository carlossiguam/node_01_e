var express = require('express');
var router 	= express.Router();
var fs 		= require('fs');
/* GET . */
router.get('/', function(req, res) {
  res.render('pdfs', { title: 'Expressito en la parte de pdfs' });
});

// router.get('/downloadFile', function (req, res) {
//    var file = path.join(__dirname, 'files/file1.pdf');
//    res.download(file, function (err) {
//        if (err) {
//            console.log("Error");
//            console.log(err);
//        } else {
//            console.log("Success");
//        }
//    });
// });


router.get('/downloadFile', function(req,res){
  var tempFile="./files/FILE2.odt";
  fs.readFile(tempFile,function(err,data){
    res.contentType('aplication/pdf');
    res.send(data);
  });
});



/* GET . */

// app.use('/pdfs', pdfs);
// router.get('/downloadFile', function(req, res) {
//   res.render('pdfs', { title: 'Express' });
// });



module.exports = router;

