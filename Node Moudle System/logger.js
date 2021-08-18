const EventEmitter = require('events');
var url = 'http://mylogger.io/log';



const emitter = new EventEmitter();

console.log('The file full location and name are : ',__filename);
console.log('The file directory location is : ',__dirname);


//function 
function log(message){

    // send HTTP request
    console.log(message);


    //Raise a event 
    emitter.emit('messageLogged', { id: 1 , url: 'http://' }); //emit - making a noise, produce - signalling.

}


module.exports = log;
module.exports.endPoint = url;
