//function 
function sayHello(name) {
    console.log('Hello ' +  name);
}

sayHello('Or');

//module
var log = require('./logger');
log('Hi, my module is working');

//path
const path =  require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

//OS
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory : ' + totalMemory + ' , Free Memory :' + freeMemory);

//Tempate string 
//ES6 = ES2015 = ECMA-Script 6 
//Specification describes what features are available in JS

// ` ` - left to 1 in the keyboard its called backtic char.
// dynamic 
console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)

//files
const fs = require('fs');
// ./ = all the files in current folder // we use sync only for expamle in real eorld we dont want to use it - we have only single thread ! 
//const files = fs.readdirSync('./'); 
//console.log(files);

fs.readdir('./',function(err,files) {
    if(err) console.log('Error', err);
    else console.log('Result', files);
});

//Events 
const EventEmitter = require('events'); //EventEmitter is a class.
const emitter = new EventEmitter(); //emitter is a object of the class EventEmitter.

//Register a listener
emitter.on('messageLogged' , function(arg) {
    console.log('Listener called', arg);
})

