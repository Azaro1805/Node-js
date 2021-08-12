// Express

const { request, response } = require('express');
const express  = require('express');
const app= express();

/*
//methods 
app.get();
app.post();
app.put();
app.delete();
*/

app.get('/', (req,res) => {
    res.send('Hello word');
});

app.get('/api/courses', (req,res) => {
    //res.send('Welcome to the course, have a nice day.');
    res.send([1,2,3]);

})

app.listen(3000, () => console.log("Listening on port 3000..."));