# Javascript Whiteboard Problems

There are several failing unit tests.
The task is to make all of the unit tests pass.

The `questions` folder contains either incomplete, or incorrect functions that need to be fixed so the unit tests pass.

The `test` folder contains the tests that are being run against the functions, which should provide enough information to know what the function is supposed to be doing.

Javascript built-in methods (`Array.prototype.map`) are not fair game :)

To run only specific tests, comment out the require statements in `testall.js`.
For instance:
```javascript
require('test/test1');
// require('test/test2');
```
would obviously run only the first set of tests.

## Requirements

### NPM

Visit [Node's documentation](https://docs.npmjs.com/getting-started/installing-node) to install Node and NPM.

## Running

### NodeJS

To run all tests in NodeJS simply execute in the terminal:
```bash
node testall.js
```

### Chrome

To run all tests in Chrome, execute in the terminal:
```bash
npm run build
```
then navigate chrome to http://localhost:1234. Output will be printed to the console and as raw text in Chrome.
