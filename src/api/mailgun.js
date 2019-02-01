import 'mailgun-js';

var API_KEY = 'd891eadd5abd1fa11c76497660293ac7-2d27312c-0b99326b';
var DOMAIN = 'sandbox500f7c6045fd4e53893d86d9dcc1cc18.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

const data = {
  from: 'Admin <me@samples.mailgun.org>',
  to: 'sayanmondal2098@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, (error, body) => {
  console.log(body);
});