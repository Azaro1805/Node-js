//Events2 with logger class
const EventEmitter = require('events'); //EventEmitter is a class.

const Logger = require('./logger2');
const logger = new Logger();


//Register a listener
logger.on('messageLogged' , function(arg) {
    console.log('Listener called', arg);
})

logger.log('message');