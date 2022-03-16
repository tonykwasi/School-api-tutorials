// Connection to the  server
const express = require('express')

const app = express()
const port = 3000


//parse JSON using express
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//set the server to listen to port
app.listen(port, () => console.log(`Server listening at port ${port}`));

let schools = [
    {
        id: 1,
        name:"cosmos",
        location:  "new york",
    },

    {
        id:  2,
        name: "silicon valley",
        locatiom:  "canada",
    },

    {
        id: 3,
        name:"crown prince",
        location: "france",
    }
]

// get all schools from the list (GET method)
app.get("/school", (req, res) => {
    res.json(schools)
});

//Add school to a list (POST method)
app.post("/school", (req, res) => {
    const school = req.body;

    console.log(school);
    schools.push(school);
    res.send("school is added to the list!");
});

//Search for a school in a list (GET method)
app.get("/school/:id", (req, res) => {
    const found = schools.some(school => school.id === parseInt(req.params.id))

    if (found){
        res.json(schools.filter(school => school.id === parseInt(req.params.id)))
    } else {
        res.sendStatus(400)
    }
});
//Update a school


//Delete a school from a list

app.delete("/school/:id", (req, res) => {
    const id = req.params.id;

    schools =  schools.filter(( school ) => {
        if ( school.id !== id) {
            return true;
        }
        return false;
    });
    res.send(" schools  is deleted");
});
