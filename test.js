var assert = require('assert');
//Chai
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
//Simple-Mock
var simple = require('simple-mock');
//Lambda
var lambda = require('lambda_function');

describe('SimpleLambda tests', function() {
  describe('Get name', function() {

    beforeEach(function() {
      simple.mock(lambda, 'getName');
    });

    it('should return \'Tim\' when the mocked with simple-mock', function() {
      lambda.getName.returnWith('Tim');

      var context = {
        invokeid: 'invokeid',
        succeed: function(result) {
          expect(result).to.equal("Tim");
          return result;
        }
      };

      lambda.handler({}, context);

    });
  });
});