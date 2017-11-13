console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
    .command('create' , 'create a new account' , function(yargs){
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Account name (eg: Twitter, Facebook)',
                type: 'string'
            },
            username: {
                demand: true,
                alias: 'u',
                description: 'Account Username or email',
                type: 'string'
            },
            password: {
                demand: true,
                alias: 'p',
                description: 'Account Password',
                type: 'string'
            }
        }).help('help')
    })
    .command('get' , 'Get an existing account' , function(yargs){
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Account name (eg: Twitter, Facebook)',
                type: 'string'
            }
        }).help('help')
    })
    .help('help')
    .argv;
var command = argv._[0];

// create 
// --name
// --username
// --password

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
 /*createAccount({
 	name: 'Facebook',
 	username: 'someemail@gmail.com',
 	password: 'Password123!'
 });

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);*/

if(command == 'create'){
    let createAccount = createAccount({
        name: argv.name,
        username: argv.username,
        password: argv.password
    });
    console.log('Account created ');
    console.log(createAccount)
} else if(command == 'get'){
    let fetchAccount = getAccount(argv.name);
    if(typeof fetchAccount === 'undefined'){
        console.log('Account not found');
    } else{
        console.log('Account found!');
        console.log(fetchAccount);
    }
}