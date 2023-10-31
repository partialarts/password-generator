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

  // Object to store user input from prompts
  var passwordOptions = {
    passwordLength: passwordLength,
    lowerCase: lowerCase,
    upperCase: upperCase,
    numeric: numeric,
    specialChar: specialChar
  };
  
  // Loop with nested conditional that breaks only when the right conditions are met
  while (true) {
    // Prompt user for password length
    var passwordLength = prompt("How many characters would you like? (between 8 - 128)"); //
    // conditional if statement to validate input.
    if (isNaN(passwordLength)) {
        alert("Enter a valid number");
    } else if (passwordLength >= 8 && passwordLength <= 128) {
        passwordOptions.passwordLength = passwordLength; break;
    } else {
        alert("Password must be between 8 and 128 characters long!");
    }
  }

  // Loop with nested conditional that breaks only when the right conditions are met
  while (true) {
    // Prompt user for character choices
    var lowerCase = prompt("Do you want to include lower case letters? (answer Y or N)");
    var upperCase = prompt("Do you want to include upper case letters? (answer Y or N)");
    var numeric = prompt("Do you want to include numbers? (answer Y or N)");
    var specialChar = prompt("Do you want to include special characters? (answer Y or N)");
    // Convert user input to lower case
    lowerCase = lowerCase.toLowerCase();
    upperCase = upperCase.toLowerCase();
    numeric = numeric.toLowerCase();
    specialChar = specialChar.toLowerCase();
    // conditional if statement to validate user input
    if (lowerCase === "n" && upperCase === "n" && numeric === "n" && specialChar ==="n") { 
        alert("You must choose at least one chacter type");
    } else if (
        (lowerCase === "y" || lowerCase === "n") &&
        (upperCase === "y" || upperCase === "n") &&
        (numeric === "y" || numeric === "n") &&
        (specialChar === "y" || specialChar === "n")
    ) {
        // stores results in passwordOptions object
        passwordOptions.lowerCase = lowerCase;
        passwordOptions.upperCase = upperCase;
        passwordOptions.numeric = numeric;
        passwordOptions.specialChar = specialChar;
        break;
    } else { 
        alert("Please only answer either Y or N");
    }
  }
  // Ends the function and returns the passwordOptions object
  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomise = Math.floor(Math.random() * arr.length);
  return arr[randomise];
}

// Function to generate password with user input
function generatePassword() {
  // variable to call the function holding the users options
  var passwordIngredients = getPasswordOptions();
  // array to store all the possible characters for the password
  var passwordArray = [];
  // variable to store the final password as a string
  var finalPassword = "";

  // conditional if statements to validate user options and push all possible characters to passwordArray 
  if (passwordIngredients.lowerCase === "y") {
      for (var i of lowerCasedCharacters)
        passwordArray.push(i);
  } if (passwordIngredients.upperCase === "y") {
      for (var i of upperCasedCharacters)
        passwordArray.push(i);
  } if (passwordIngredients.numeric === "y") {
      for (var i of numericCharacters)
        passwordArray.push(i);
  } if (passwordIngredients.specialChar === "y") {
      for (var i of specialCharacters)
        passwordArray.push(i);
  // Loops through passwordArray according to passwordLength and stores results in finalPassword variable. getRandom function ensures items in passwordArray are picked at random
  } for (i = 0; i < passwordIngredients.passwordLength; i++) {
    finalPassword += getRandom(passwordArray);
  }
  // ends function and returns finalPassword
  return finalPassword;
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