// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
  var elementArray = [];
  
	var recursivePart = function(elementNodes) {
	  for (var i=0; i < elementNodes.length; i++) {
	  	if (elementNodes[i] !== undefined) {
	  	if (_.include(elementNodes[i].classList, className)) {
				elementArray.push(elementNodes[i])	
  		}
		}
  		recursivePart(elementNodes[i].childNodes)
 	}
 	}
 	recursivePart(document.childNodes)

	return elementArray
}

//document.body
//element.childNodes
//element.classList