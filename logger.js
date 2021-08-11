var url = 'http://mylogger.io/log';
console.log('The file full location and name are : ',__filename);
console.log('The file directory location is : ',__dirname);

function log(message){

    // send HTTP request
    console.log(message);

}


module.exports = log;
module.exports.endPoint = url;