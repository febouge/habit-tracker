const chai = require("chai");
const expect = chai.expect;
const app = require('../app');
const supertest = require("supertest");

describe("indexroutes", function() {
  let request;
  beforeEach(function() {
    request = supertest(app).get("/");
  });
  it("Returns a JSON", function(done) {
    request
    .expect("Content-Type", "application/json; charset=utf-8")
    .expect(200)
    .end(done);
  });
  it("JSON has property title", function(done) {
    request
    .expect(function(res){
      if (res.body === null){
        throw new Error("Response has an empty body");
      }
      if (!res.body.hasOwnProperty('title')){
        throw new Error("The JSON object is not correct");
      }
    })
    .end(done);
  });
  it("Title property has 'Welcome' value", function(done) {
    request
    .expect(function(res){
      if (res.body === null){
        throw new Error("Response has an empty body");
      }
      if (res.body.title !== 'Welcome'){
        throw new Error("The title property is not correct");
      }
    })
    .end(done);
  });
});
