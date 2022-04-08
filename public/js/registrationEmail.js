"use strict";
const nodemailer = require("nodemailer");
const {
  Drug,
  Freedrugs,
  Category
} = require('../routes/indexRouter.js');

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();
  
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Дарина 💊" <manager@yandex.ru>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Добро пожаловать в социальную аптеку ✔", // Subject line
    text: "Благодарим Вас за регистрацию на нашем сайте",
    html: "<b>Hello world?</b>", // html body
  });
  
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
