const {SHA256} = require('crypto-js');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err,salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = "$2a$10$pVmg9Iw7M963dsarYKx5X.qHgdsaYcEaICbhw6YM5M2vVL274x0Pa" //copied from the console

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
})


var message = 'I am user Piervalerio';

var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Message: ${hash}`);

var data = {
    id: 5
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
if(resultHash === token.hash){
    console.log('Data was not changed');
} else {
    console.log('Data was changed. Do not trust!');
};
