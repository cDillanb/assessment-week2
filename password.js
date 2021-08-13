const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Welcome to the password validator!')
reader.question("Please enter a password of at least 10 characters", function(password){
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var format1 = /[1234567890]/

    let wonderful = `
                                       __ __ 
                 _         ___     _ _|  |  |
 _ _ _ ___ ___ _| |___ ___|  _|_ _| | |  |  |
| | | | . |   | . | -_|  _|  _| | | | |__|__|
|_____|___|_|_|___|___|_| |_| |___|_|_|__|__|
          
`
    if (password.length < 10) {
        console.log('Password not long enough')
    } else if (format.test(password) === false) {
        console.log('Please use at least one special character')
    } else if (format1.test(password) === false) {
        console.log('Please use at least one number')
    } else {
        console.log(wonderful)
        console.log("Password accepted, Wonderful!!")
    }

    reader.close()
});
