// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	// handle literals

  if (typeof obj === 'string') { return ('"' + obj + '"'); }
  if (typeof obj === 'number' || typeof obj === 'boolean') { return obj.toString();}
	if (obj === null) { return 'null' }
	if (obj === undefined) { return '' }

  if (Array.isArray(obj)) {
    
    var result = '['
    for (var x = 0; x < obj.length-1; x++) {
					result += stringifyJSON(obj[x]) + ',';
				}
				return result += stringifyJSON(obj[x]) + ']'
  		}
   
  if (obj !== null && typeof obj === 'object') {
  // 	var objectKeys = Object.keys(obj);
  // 	var objectKeyLength = objectKeys.length; 							//objectKeys has all of the keys from obj in an array
  // 	for (var i = 0; i < objectKeyLength; i++) {
  // 		if (typeof objectKeys[i] === 'object') {
  // 			return result + objectKeys[i] + '":' + stringifyJSON(objectKeys[i]) + ', ' + '}';
  // 		}
	 //  		return result + objectKeys[i] + '":' + stringifyJSON(obj[objectKeys[i]]) + '}';
		// }
		var result = '';
			for (var key in obj) {
				if (key === 'function' || key === 'undefined') { return '{}' }
				result += '"' + key + '":' + stringifyJSON(obj[key]) + ','
			}


		return '{' + result.slice(0,-1) + '}'
		
	}

};