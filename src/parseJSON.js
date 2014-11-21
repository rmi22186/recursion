// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var parsed = ''

  if (json === 'true') { return true }                                  // if boolean
  if (json === 'false') { return false }
  if (json === 'null') { return null }

  if (parseFloat(json) && typeof parseFloat(json) === 'number') {       // if number
    return parseFloat(json)
  }

  if (json[0] === '"') {                                                // if string
    for (var i = 1; i<json.length-1; i++) {
      parsed += json[i]
    }
    return parsed
  }

  if (json[0] === '[') {
    parsed += '['
    for (var i=1; i<json.length-1; i++) {
      parsed += json[i] + parseJSON(i) + ']'
    }
  }

  if (json[0] === ',') {
    return parsed + ', ' + parseJSON(json.slice(1,json.length))
  }

};