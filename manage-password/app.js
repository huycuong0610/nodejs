console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

// account.name Facebook
// account.username User12
// account.password 

function createAccount(account){
    var accounts = storage.getItemSync('accounts');
    // if account is underfined (use typeof)
    // push on new account

    // return account
}

function getAccount(accountName){

}