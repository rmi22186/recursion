// test cases are described in fixtures.js
describe('parseJSON', function(){

it('strings', function() {

    var testString = '"string"';

      var testStringResult = parseJSON(testString);
      var testStringExpected = JSON.parse(testString);


    expect(testStringResult).to.equal(testStringExpected);

  })

  it('numbers', function() {
    var testNumber = 3;
      
      var testNumberResult = parseJSON(testNumber);
      var testNumberExpected = JSON.parse(testNumber);

    expect(testNumberResult).to.equal(testNumberExpected);

  });


  it('simple arrays', function() {
    var testArray = ['1', 2, true, ['anotherarray', 'anotherarrayitem'],['yet another array', 'yari2']];

      var testArrayResult = parseJSON(testArray);
      var testArrayExpected = JSON.parse(testArray);

    expect(testArrayResult).to.equal(testArrayExpected);

  });

  it('array with objects', function() {
      var testArray = ['1', 2, {obj1: 'value1'}, true];

      var testArrayResult = parseJSON(testArray);
      var testArrayExpected = JSON.parse(testArray);

    expect(testArrayResult).to.equal(testArrayExpected);

  });

  it('simple objects', function() {
    var testObject = {x: 'value1', y: 'value2', z: 'value3'};

      var testObjectResult = parseJSON(testObject);
      var testObjectExpected = JSON.parse(testObject);

    expect(testObjectResult).to.equal(testObjectExpected);

  });

  it('complicated objects', function() {
    var testObject = {key1: {key2: {key3: 'value1'}, key4: 'value2'}, key5: 'value3', key6: 'value4'};

      var testObjectResult = parseJSON(testObject);
      var testObjectExpected = JSON.parse(testObject);

    expect(testObjectResult).to.equal(testObjectExpected);

  });
  

  it('should match the result of calling JSON.parse', function(){
    parseableStrings.forEach(function(test){
      var result = parseJSON(test);
      var expected = JSON.parse(test);
      var equality = _.isEqual(result, expected); // why can't we use `===` here?
      expect(equality).to.equal(true);
    });
  });

  it('should throw an error for invalid stringified JSON', function(){
    unparseableStrings.forEach(function(test){
      var fn = function(){
        parseJSON(test);
      }
      // if you'd prefer, you can write your version of parseJSON 
      // so that it passes this test instead of the one on line 21. 
      // expect(parseJSON(test)).to.equal(undefined);
      expect(fn).to.throw(SyntaxError);
    });
  });

});
