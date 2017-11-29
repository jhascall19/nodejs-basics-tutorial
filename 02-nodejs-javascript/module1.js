function myFunction() { //goes to app.js
	//easier
	//use the module object to export parts of this file to other parts
    console.log('Function was called');
}

var myString = 'String!';

module.exports.myFunction = myFunction; //this allows it to be exported
module.exports.myString = myString; //same things