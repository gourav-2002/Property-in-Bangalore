const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zapcode02@gmail.com',
        pass: 'Gourav@2002'
    }
});

app.post('/send', (req, res) => {
    const { name, from, phone } = req.body;

    const mailOptions = {
        from: email,
        to: 'aggarwalgourav02@gmail.com',
        subject: `Enquiry`,
        text: name + from + phone
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Error sending email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
