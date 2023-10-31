# Front End Bootcamp - Week 5 Challenge - Password Generator

## Description

The purpose of this project was to build a secure password generator using JavaScript, giving the user the option to customise the length and characters of the password. The application runs in the browser and uses HTML and CSS to dynamically display the results of the JavaScript code.

The aim was to further use the JavaScript concepts I've learned so far to create a real world application, as well as researching and utilising new concepts.

A function containing `while` loops was used to hold the user prompts, with conditional `if` statements nested inside them to validate the user input. One problem I faced was the potential for users to input both upper and lower case letters in the prompts. I found I need to convert the values to lower case using the `.toLowerCase()` method for a consistent result. The values were stored inside a local object which was returned to the function, to be called later on.

Conditional `if` statements were used to check which characters the user had chosen and all the possible characters were pushed from their original arrays and combined into one new one. One challange was how to randomise the password result - I used the `Math.floor()` method inside a function and then called this function within a `for` loop to iterate over the newer array according to the password length. The results were returned to a new variable as a string, this being the final password.

I spent some time organising the code once finished to ensure its readability, trying to group related objects together with clear comments.

## Deployed Application

* [Password Generator on GitHub Pages](https://partialarts.github.io/password-generator/)

## Usage

To use this web page, you can open index.html inside a browser.

To generate your password, click "Generate Password" and follow the prompts. Your passwor will appear in the text field on the application

## Screenshot

![The application includes a home page, with the results of the task visible in the browser console.](images/screenshot.png)

### External Tutorials and Resources

* [How can I create a loop for a prompt, when the answer is unacceptable for a criteria?3](https://stackoverflow.com/questions/63207575/how-can-i-create-a-loop-for-a-prompt-when-the-answer-is-unacceptable-for-a-crit)
* [Nested if/else in While loop](https://stackoverflow.com/questions/13381154/nested-if-else-in-while-loop)
* [How to Get a Random Value From an Array in JavaScript](https://medium.com/programming-essentials/how-to-get-a-random-value-from-an-array-e6c6958403df)
* [JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)
* [Using and (&&) and or (||) together in the same condition in JavaScript](https://stackoverflow.com/questions/17022778/using-and-and-or-together-in-the-same-condition-in-javascript)
* [isNaN()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
* [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
* [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

## License

MIT - [See LICENSE file in repo](https://github.com/partialarts/Console-Finances/blob/main/LICENSE)
