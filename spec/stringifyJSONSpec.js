// test cases are described in fixtures.js
describe('stringifyJSON', function(){
  
  it('strings', function() {

    var testString = 'string';

      var testStringResult = stringifyJSON(testString);
      var testStringExpected = JSON.stringify(testString);

    expect(testStringResult).to.equal(testStringExpected);

  })

  it('numbers', function() {
    var testNumber = 3;
      
      var testNumberResult = stringifyJSON(testNumber);
      var testNumberExpected = JSON.stringify(testNumber);

    expect(testNumberResult).to.equal(testNumberExpected);

  });


  it('arrays', function() {
    var testArray = ['1', 2, true, ['anotherarray']];

      var testArrayResult = stringifyJSON(testArray);
      var testArrayExpected = JSON.stringify(testArray);

    expect(testArrayResult).to.equal(testArrayExpected);

  });

  it('simple objects', function() {
    var testObject = {x: 'key1', y: 'key2', z: 'key3'};

      var testObjectResult = stringifyJSON(testObject);
      var testObjectExpected = JSON.stringify(testObject);

    expect(testObjectResult).to.equal(testObjectExpected);

  });

  it('complicated objects', function() {
    var testObject = {obj1: {obj2: {obj3: 'key1'}}, obj4: 'key2'};

      var testObjectResult = stringifyJSON(testObject);
      var testObjectExpected = JSON.stringify(testObject);

    expect(testObjectResult).to.equal(testObjectExpected);

  });
  
  it('should match the result of calling JSON.stringify', function(){

    stringifiableObjects.forEach(function(test){
      var result = stringifyJSON(test);
      var expected = JSON.stringify(test);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj){
      var result = stringifyJSON(obj);
      var expected = JSON.stringify(obj);
      expect(result).to.equal(expected);
    });
  });
});