const express = require("express");
const users = require('./data');
const getEmail = require('./getEmail');
const app = express();


app.use(express.static('public'));



app.get('/getemail', (req, res)=>{
    const name = req.query.name;
    const phone = req.query.phone;
    const email = getEmail(users, name)
    res.send(`Your email is ${email} and your phone # is ${phone}`);
});


app.get('/getuser', (req, res)=>{

    const index = req.query.index;
    const oneUser = users[index];
    res.send(oneUser);
});


app.get('/greet', (req, res)=>{
    const userName = req.query.user
    res.send(`Hello ${userName}!`);
});

app.get('/goodbye', (req, res)=>{
    const userName = req.query.user
    res.send(`Goodbye ${userName}!`)
});

app.get('/weather', (req, res)=>{
    const userName = req.query.user
    res.send(`How is the weather ${userName}`);
});


// const port = 8080;
// process.env.PORT; 
const port = process.env.PORT || 8000;
app.listen(port, ()=>console.log(`Server listening on ${port}`));

//load express 