// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.conferences('CFbbe4632a3c49700934481addd5ce1659')
      .participants('CA386025c9bf5d6052a1d1ea42b4d16662')
      .remove()
      .then(participant => console.log(participant.callSid));
