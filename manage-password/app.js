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

    if(typeof accounts === 'undefined'){
        accounts = [];
    }

    accounts.push(account);
    storage.setItemSync('accounts' , accounts);
    return account;

    // return account
}

function getAccount(accountName){
    var accounts = storage.getItemSync('accounts');
    var matchedAccount;

    accounts.forEach(function(account) {
        if(account.name === accountName){
            matchedAccount = account;
        }
    }, this);

    return matchedAccount;
}

//comment
 createAccount({
 	name: 'Facebook',
 	username: 'someemail@gmail.com',
 	password: 'Password123!'
 });

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);