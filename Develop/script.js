var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

function getPasswordOptions() {
    var length = prompt("How long do you want your new password to be?");
    if (typeof length !== 'number') {
        alert('this is not a number');
        return;
    }
    if (length < 8) {
        alert('Your password is too short')
        return;
    }

    if (length > 128) {
        alert('Your password is too long it must be less than 129 characters')
        return;
    }

    var specialCharacters = confirm(
        "click Ok to use special characters in your password"
    );

    var upperCasedCharacters = confirm(
        "click OK to use uppercase characters in your password"
    );

    var lowerCasedCharacters = confirm(
        "Click OK to use lowercase characters in your password"
    );

    var numericalcharacters = confirm(
        "click OK to use numerical characters in your password"
    );

    if (
        specialCharacters === false &&
        upperCasedCharacters === false &&
        lowerCasedCharacters === false &&
        numeriocalCharacters === false
    ) {
        alert("You must select at least one of the options for password characters")
        return;
    };

    var passwordOptions = {
        length: length,
        specialCharacters: specialCharacters,
        upperCasedCharacters: upperCasedCharacters,
        lowerCasedCharacters: lowerCasedCharacters,
        numericalcharacters: numericalcharacters
    };
    return passwordOptions;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);