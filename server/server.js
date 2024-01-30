const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your email',
        pass: 'your password as token from google security',
    },
});

app.post('/send-email', (req, res) => {
    // here can be an "to" to send email to = email to send email to the email input
    const {fullName, phoneNumber, email,company, subject, message} = req.body;

    const templatePath = path.join(__dirname, 'email-template.html'); // this is an email template in html

    const htmlTemplate = fs.readFileSync(templatePath, 'utf-8');

    // formatted from html file to values
    
    const formattedHtml = htmlTemplate
        .replace('{fullName}', fullName)
        .replace('{email}', email)
        .replace('{phoneNumber}', phoneNumber)
        .replace('{company}', company)
        .replace('{message}', message);
    
    const mailOptions = {
        from: 'from email',
        to: '', // here can be as just to if we need to send email to email input from user to send an welcome email
        subject,
        html: formattedHtml,
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent successfully: ' + info.response);
    });
});

const PORT = 5500;

app.listen(PORT, () => {
    console.log(`This server is running in port: ${PORT}`);
});
