var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("https://fkd6qtx3b1.execute-api.us-east-1.amazonaws.com");

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page

  it("should return home page",function(done){
     this.timeout(15000);
    // calling home page api
    server
    .get("/Prod/user/%7Buser_number%7D?user_number=34870F7303")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
     if(res.body.error) {
       done("error")
     }
     res.body.should.be.instanceof(Array)
     done();
    });
  });

});