var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shohinbmt@gmail.com',
    pass: 't26JtR7zgvzCBw4'
  }
});

var mailOptions = {
  from: 'shohinbmt@gmail.com',
  to: 'm.abdulmalik_1999@mail.ru',
  subject: 'testsgfg dfg fd gfd ',
  text: 'dfgfdg fd gfd gf dd gdf g!'
};

const password = 't26JtR7zgvzCBw4'

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
