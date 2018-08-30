const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

//bcrypt.genSalt(10, (err,salt) =>{
//   bcrypt.hash(password, salt, (err, hash) =>{
//     console.log(hash);
//   })
// });

var hashedPassword = '$2a$10$EiQjmJdUmKsBYYD5Vk6e.e5u53Ru18Otwh6HlfARWHeo/PhROZ7j';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hahs: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash : SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// token.data = 5;
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if(resultHash === token.hash){
//   console.log('Data was not changed');
// }else{
//   console.log('Data was changed');
// }

// var data ={
//   id: 1023123,
//   text: 'hello'
// };
//
// var token = jwt.sign(data, 'somesecret');
// console.log(token);
//
// var decoded = jwt.verify(token, 'somesecret');
// console.log(decoded);
