# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

incoming_phone_numbers = client.incoming_phone_numbers.list(
                                                           phone_number='867',
                                                           limit=20
                                                       )

for record in incoming_phone_numbers:
    print(record.sid)
