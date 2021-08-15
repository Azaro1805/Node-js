// joi 
const Joi = require('joi');

// Express
const { request, response } = require('express');
const express  = require('express');
const app= express();

app.use(express.json());


const  courses = [ 
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]

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
    res.send([courses]);

})

app.get('/api/courses/:id', (req,res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course of this given ID was not found'); //404 - error of not found 
    res.send("Welcome to the course number " + req.params.id); 
});

//post -  how we add a new course.
app.post('/api/courses', (req,res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);

    if(result.error){
        //400 bad request
        res.status(400).send(result.error);
        return;
    } 

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});

// PORT 
const port = process.env.PORT|| 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));