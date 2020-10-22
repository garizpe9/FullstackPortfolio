var path = require("path");
require('dotenv').config();
const express = require("express");
const session = require("express-session");
var PORT = process.env.PORT || 8080;
var app = express();
const sendMail = require('./mail')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
  );

app.get('/',(req,res) => { 
    res.sendFile(path.join(__dirname,"index.html"))
});

app.get('/form',(req,res) => { 
    res.sendFile(path.join(__dirname,"form.html"))
});

app.get('/emailinfo',(req,res) =>{
    console.log('Dataget:', req.body)
    res.json({message: "Success" })
});

app.post('/emailinfo',(req,res) =>{
    sendMail (req.body.from, req.body.email, req.body.subject, req.body.text, function (err, data){
        if (err){
            res.status(500).json({message: 'Internal Error'});
        }else{
            console.log("Message sent")
        }
    })
    console.log('Datapost:', req.body)
});

app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });