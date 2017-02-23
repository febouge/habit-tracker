const chai = require("chai");
const expect = chai.expect;
const app = require('../app');
const supertest = require("supertest");

describe("Habit Main Routes - Get", function() {
  let request;
  beforeEach(function() {
    request = supertest(app).get("/habit");
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
  it("Title property has 'Habit' value", function(done) {
    request
    .expect(function(res){
      if (res.body === null){
        throw new Error("Response has an empty body");
      }
      if (res.body.title !== 'Habit'){
        throw new Error("The title property is not correct");
      }
    })
    .end(done);
  });
});

describe("Habit creation route - POST", function() {
  let request;
  beforeEach(function() {
    request = supertest(app).post("/habit/new");
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
  it("The JSON title is correct", function(done) {
    request
    .expect(function(res){
      if (res.body === null){
        throw new Error("Response has an empty body");
      }
      if (res.body.title !== 'Create new habit'){
        throw new Error("The title property is not correct");
      }
    })
    .end(done);
  });
});

describe("Habit update route - PUT", function() {
  let request;
  beforeEach(function() {
    request = supertest(app).put("/habit/update");
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
  it("The JSON title is correct", function(done) {
    request
    .expect(function(res){
      if (res.body === null){
        throw new Error("Response has an empty body");
      }
      if (res.body.title !== 'Modify existing habit'){
        throw new Error("The title property is not correct");
      }
    })
    .end(done);
  });
});

describe("Habit delete route - DELETE", function() {
  let request;
  beforeEach(function() {
    request = supertest(app).del("/habit/delete").send({});
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
  it("The JSON title is correct", function(done) {
    request
    .expect(function(res){
      if (res.body === null){
        throw new Error("Response has an empty body");
      }
      if (res.body.title !== 'Delete existing habit'){
        throw new Error("The title property is not correct");
      }
    })
    .end(done);
  });
});
