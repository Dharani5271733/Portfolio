// // Import required packages
// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// // Initialize the express app
// const app = express();
// const port = 3000;  // You can change the port if needed

// // Middleware to parse the body of the request
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Set up the mail transport using SMTP (example: Gmail)
// const transporter = nodemailer.createTransport({
//     service: 'gmail',  // You can use another email service (like Outlook, etc.)
//     auth: {
//         user: 'your-email@gmail.com',  // Replace with your email
//         pass: 'your-email-password',   // Replace with your email password or App password
//     },
// });

// // Define the endpoint for handling the form submission
// app.post('/send-email', (req, res) => {
//     const { name, email, phone, message } = req.body;

//     // Define email details
//     const mailOptions = {
//         from: email,  // The sender's email
//         to: 'your-email@gmail.com',  // The recipient's email
//         subject: `Message from ${name}`,
//         text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
//     };

//     // Send email using nodemailer
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).json({ message: 'Error sending message' });
//         }
//         res.status(200).json({ message: 'Message sent successfully' });
//     });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
