const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    // 1. Create a transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: 'bc696c46c6a0b0',
            pass: 'e5a61bba39bb11',
        },
    });
    // 2. Define the email options
    const mailOptions = {
        from: 'Su Nguyen Minh Triet <mt@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message,
        // html:
    };

    // 3. actually send the email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
