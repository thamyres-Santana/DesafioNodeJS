var express = require('express');
const SendmailTransport = require('nodemailer/lib/sendmail-transport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/enviar', function(req, res, next) {
  var nodemailer = require('nodemailer');
  console.log(req.body);

  var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5c683742aa8378",
      pass: "d6c0b4e96c505a"
    }
  });

  var mailOptions = {
    from: "atss1@discente.ifpe.edu.br",
    to: req.body.email,
    subject: 'Sending Email using Node.js',
    text: 'Email enviado para: '+ req.body.nome +'!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


  res.send("Enviado!");
  //res.render('index', { title: 'Express' });
});

module.exports = router;
