var crypto = require('crypto-js');

var secretMessage = {
    name: 'Cuong',
    secretName: 'seven'
};

var secretKey = '123abc';
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage) , secretKey);

// Encrypt
console.log('Encrypted Message ' + encryptedMessage);

//Decrypt

var bytes = crypto.AES.decrypt(encryptedMessage , secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log(decryptedMessage.secretName);