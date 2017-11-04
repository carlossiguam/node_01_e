
var bytesi 	= require('bytes');
var express = require('express');
var router 	= express.Router();
var os 		= require('os'); 
var hostname 	= os.hostname();
var typename 	= os.type();
var platform	= os.platform();
var arquitectura= os.arch();
var release		= os.release();
var uptime		= os.uptime();
var loadavg		= os.loadavg();

var totalmem	= os.totalmem();
var freemem		= os.freemem();
var cpus 		= os.cpus();
var network		= os.networkInterfaces();

// var direcciones = [];

// for(var k in network){
// 	for(var k2 in network[k]){
// 		var direccion = network[k][k2];
// 		if(direccion.family === 'IPv4' && ! direccion.internal){
// 			direcciones.push(direcion.address);
// 		}
// 	}
// }


var totalmemo 	= bytesi(totalmem);
var freememo 	= bytesi(freemem);

var titulo="Informacion de la maquina";


/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: titulo,
  	
  	hostname: hostname,
  	typename: typename,
  	platform: platform,
  	arquitectura: arquitectura,
  	release: 	release,
  	uptime: 	uptime,
  	loadavg: 	loadavg,
  	totalmem: 	totalmemo,
  	freemem: 	freememo,
  	cpus: 		Object.keys(cpus),
  	network: 	Object.keys(network)


   });
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
