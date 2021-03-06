// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.addresses
      .create({
         friendlyName: 'Billing - Customer 123',
         customerName: 'Customer 123',
         street: '1 Hasselhoff Lane',
         city: 'Berlin',
         region: 'Berlin',
         postalCode: '10875',
         isoCountry: 'DE'
       })
      .then(address => console.log(address.sid));
