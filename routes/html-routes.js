const path = require("path");
const sendMail = require('../mail')

module.exports = function(app) {
    app.get('/',(req,res) => { 
        res.sendFile(path.join(__dirname,"../index.html"))
    });

    app.get('/form',(req,res) => { 
        res.sendFile(path.join(__dirname,"../public/form.html"))
    });

    app.get('/portfolio',(req,res) => { 
        res.sendFile(path.join(__dirname,"../public/portfolio.html"))
    });

    app.get('/form/emailinfo',(req,res) =>{
        console.log('Dataget:', req.body)
        res.json({message: "Success" })
    });

    app.post('/form/emailinfo',(req,res) =>{
        sendMail (req.body.from, req.body.email, req.body.subject, req.body.text, function (err, data){
            if (err){
                res.status(500).json({message: 'Internal Error'});
            }else{
                console.log("Message sent")
            }
        })
        console.log('Datapost:', req.body)
    });
};
