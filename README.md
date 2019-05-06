[![Build Status](https://codebuild.eu-west-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiMzdadE12Q25IbEJ5YXNUMkR1NWZ4VVVpSmEvMnhKd0dlWkRsQkp6eHR6bU9kQzA2Rnp6VC9lb1haZlQvZTIyWTAzdGhPd1RicU9YWFdLZy9YRWFzdDRZPSIsIml2UGFyYW1ldGVyU3BlYyI6ImJWczZha3RnczRPNDd3K1UiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://eu-west-1.console.aws.amazon.com/codesuite/codebuild/projects/gaus-update-types/history)

# gaus-update-types

This Javascript library describes different updates types

# Usage

```javascript
const { updateType, getSupportedUpdateTypes } = require('@gaus/update-types');

//Check equality:
updateType('number').eq('1', '2');

//Validate:
let result: string = updateType('number').validate('1');
console.log(result); //null
result = updateType('number').validate('1.1.1');
console.log(result); //1.1.1 is not a number

//Validate with custom error message;
let test = '1.1.1';
result = updateType('number').validate(test, `${test} is not a valid version number`);
console.log(result); //1.1.1 is not a valid versio number
```
