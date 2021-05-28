const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the pasword validator tool!')
console.log()

reader.question('Please Validate your password: ', 
    function(input){
	    password = input

    if (password.length >= 10) {
        console.log()
        console.log('Success!')
    }else {
        console.log()
        console.log('Fail')
    }
    reader.close();

});