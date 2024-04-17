# Sample JS apps



## File Structure

Each folder includes:

- `readme.md` - The challenge/code instructions. This also includes hints, tests and a dropdown with the solution code as well as the explanation of the solution code.
- `[name].js` - This is your working file. It has the name of the function and the function is exported. No parameters are passed to the function. That is up to you to add.
- `[name]-run.js` - File to run the code manually. The function is already imported and called with expected parameters.
- `[name]-solution.js` The solution code with heavy commenting. Some challenges have multiple solutions. If you want the solution without comments, look in the `readme.md` file.
- `[name]-test.js` - Jest tests for the solution code. You will need to rename this file to `[name].test.js` to run the tests.


## Running Tests

In order for the Jest tests to run, you need to rename the test file to `[name].test.js`. For example, if you are working on the `hello-world` challenge, you need to rename the `hello-world-test.js` file to `hello-world.test.js`. This is because Jest looks for files with the `.test.js` extension.

Run the command `npm run test` from the root directory and it will run all the tests.

## Getting Started

1. Clone the repo
2. Run `npm install`
3. Run `npm run test` to run the tests. Again, you will need to rename the test files and replace the `-test` with `.test` to run the tests.

## Index of Apps
1. bin2dec
