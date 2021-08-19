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
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course of this given ID was not found'); 
    res.send("Welcome to the course number " + req.params.id); 
});

//post -  how we add a new course.
app.post('/api/courses', (req,res) => {

    const {error} = ValidateCourse(req.body); //{error} = result.error 
    if(error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});

// PUT
app.put('/api/courses/:id', (req,res) => {
    //Look up the course 
    //if not existing, return 404 - not found
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course of this given ID was not found'); 
    
    //validate
    //if invalid, return 400 - bad request

    //const result =  ValidateCourse(req.body);
    const {error} = ValidateCourse(req.body); //{error} = result.error 
    if(error) return res.status(400).send(error.details[0].message);
    

    //update course
    course.name = req.body.name;
    res.send(course);

    //return the updated course
});

// Delete
app.delete('/api/courses/:id', (req,res) => {
    //Look up the course 
    //if not existing, return 404 - not found
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course of this given ID was not found'); 

    //Delete
    
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});


// Validate course function
function ValidateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}

// PORT 
const port = process.env.PORT|| 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));