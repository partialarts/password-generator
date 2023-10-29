// Array of special characters to be included in password
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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
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

// Array of uppercase characters to be included in password
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


// Function to prompt user for password options
function getPasswordOptions() {
  var passwordOptions = {
    passwordLength: passwordLength,
    lowerCase: lowerCase,
    upperCase: upperCase,
    numeric: numeric,
    specialChar: specialChar
  }

// passwordOptions = Object.fromEntries(
//   Object.entries(passwordOptions).map(([key, value]) => [key, value.toLowerCase()])
// 
  
  while (true) {
    var passwordLength = prompt("How many characters would you like? (between 8 - 128)");
    if (isNaN(passwordLength)) {
        alert("Enter a valid number");
    } else if (passwordLength >= 8 && passwordLength <= 128) {
        passwordOptions.passwordLength = passwordLength; break;
    } else {
        alert("Password must be between 8 and 128 characters long!");
    }
  }

  while (true) {
    var lowerCase = prompt("Do you want to include lower case letters? (answer Y or N)");
    var upperCase = prompt("Do you want to include upper case letters? (answer Y or N)");
    var numeric = prompt("Do you want to include numbers? (answer Y or N)");
    var specialChar = prompt("Do you want to include special characters? (answer Y or N)");
    if (lowerCase === "n" && upperCase === "n" && numeric === "n" && specialChar ==="n") { 
        alert("You must choose at least one chacter type");
    } else if (
        (lowerCase === "y" || lowerCase === "n") &&
        (upperCase === "y" || upperCase === "n") &&
        (numeric === "y" || numeric === "n") &&
        (specialChar === "y" || specialChar === "n")
    ) {
        return passwordOptions;
    } else { 
        alert("Please only answer either Y or N")
    }
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomise = Math.floor(math.random() * arr.length);
  return arr[randomise];
  }

// Function to generate password with user input
function generatePassword() {
  var passwordRecipe = getPasswordOptions();
  var passwordArray = [];
  var finalPassword = ""
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
// Starts the writePassword function on button click
generateBtn.addEventListener('click', writePassword);