// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {


  if (typeof obj === 'string') {
      return ('"' + obj + '"');
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  if (Array.isArray(obj)) {
    return ('"[' + obj + ']"');
  } 


  //objectKeys has all of the keys from obj in an array
  var objectKeys = Object.keys(obj);

		var i = 0;
		var objectKeyLength = objectKeys.length;
		while (i < objectKeyLength) {
	  	return '{"'+ objectKeys[i] + ": " + stringifyJSON(obj[objectKeys[i]]) + '}';
	  	i++
		}
};