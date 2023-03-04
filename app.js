//express works on top to bottom approch as it excetues what is eritten first
const express = require('express')
const app = express();
const path = require('path');
const hbs = require('hbs');


//const port = 2000;
// when we deploy the website we have to use environment variable
 const port = process.env.port || 2000
// when we deploy the website it either will work on 2000 or else go to the port assigned through process.env.port



// public static path
const static_path = (path.join(__dirname,"public"));
const template_path = (path.join(__dirname,"templates/views"));
const partials_path = (path.join(__dirname,"templates/partials"));

app.set('view engine', 'hbs');
app.use(express.static(static_path));
app.set('views',template_path);
hbs.registerPartials(partials_path);




 // routing
//app.get(route,callback function)
app.get("",(req,res) => {
    res.render('index.hbs')
})

app.get("/about",(req,res) => {
    res.render('about.hbs')
})



app.get("/weather",(req,res) => {
    res.render('weather.hbs')
})

// this is when the route is anything else than the above mentioned we use operator *
app.get("*",(req,res) => {
    res.render('404error.hbs',{
        errorMsg: "OPPS!!! Page Not Found"
    })
})

app.listen(port,() => {
    console.log("Connected")
}) 