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
    var length = parseInt(
        prompt("How long do you want your new password to be?")
    );
    if (isNaN(length) === true) {
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

    var hasSpecialCharacters = confirm(
        "click Ok to use special characters in your password"
    );

    var hasUpperCasedCharacters = confirm(
        "click OK to use uppercase characters in your password"
    );

    var hasLowerCasedCharacters = confirm(
        "Click OK to use lowercase characters in your password"
    );

    var hasNumericalCharacters = confirm(
        "click OK to use numerical characters in your password"
    );

    if (
        hasSpecialCharacters === false &&
        hasUpperCasedCharacters === false &&
        hasLowerCasedCharacters === false &&
        hasNumericalCharacters === false
    ) {
        alert("You must select at least one of the options for password characters")
        return;
    };

    var passwordOptions = {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasUpperCasedCharacters: hasUpperCasedCharacters,
        hasLowerCasedCharacters: hasLowerCasedCharacters,
        hasNumericalCharacters: hasNumericalCharacters
    };
    return passwordOptions;
}

// function to get random number for array length

function getRandomElement(array) {
    var arrayLength = array.length;
    var randomizer = Math.random() * arrayLength;
    var randomArrayNumber = Math.floor(randomizer);
    var randomArrayElement = array[randomArrayNumber];
    return randomArrayElement;
}

function generateRandomPassword() {
    var optionsForPassword = getPasswordOptions();
    var possibleCharacters = [];
    var neededCharacters = [];
    var chosenCharacters = [];

    if (optionsForPassword.hasNumericalCharacters) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        neededCharacters.push(getRandomElement(numericCharacters));
    }
    if (optionsForPassword.hasLowerCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        neededCharacters.push(getRandomElement(lowerCasedCharacters));
    }
    if (optionsForPassword.upperCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        neededCharacters.push(getRandomElement(upperCasedCharacters));
    }
    if (optionsForPassword.specialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        neededCharacters.push(getRandomElement(specialCharacters));
    }

    for (var i = 0; i < optionsForPassword.length; i++) {
        var randomCharacter = getRandomElement(possibleCharacters);
        chosenCharacters.push(randomCharacter);
    }

    for (var i = 0; i < neededCharacters.length; i++) {
        chosenCharacters[i] = neededCharacters[i];
    }

    return chosenCharacters.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generateRandomPassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);