require('dotenv').config();
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.EMAIL,
        domain:  process.env.PASSWORD

    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) =>{
    const mailOptions = {
        from: email,
        to: "veliaarizpe@gmail.com",
        subject: subject,
        text: text
    };
    transporter.sendMail(mailOptions, function(err, data){
        if (err){
            console.log(err)
        }else{
            console.log("Message sent")
        }
    });
}



module.exports=sendMail;