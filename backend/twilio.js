const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
    .create({ 
        body: 'Time to invest!',  
        messagingServiceSid: 'MG68d933e57fc6f954084b525096bcce8a',      
        to: '+15712508955' 
    });