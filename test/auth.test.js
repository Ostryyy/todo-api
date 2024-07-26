process.env.NODE_ENV = "test";

require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../src/models/User");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server");
const should = chai.should();

chai.use(chaiHttp);

describe("Auth", () => {
  before(async () => {
    await User.deleteMany({});
  });

  describe("/POST register", () => {
    it("it should register a user", (done) => {
      let user = {
        username: "testuser",
        password: "testpassword",
      };
      chai
        .request(server)
        .post("/api/auth/register")
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.body.should.have
            .property("message")
            .eql("User registered successfully");
          done();
        });
    });
  });

  describe("/POST login", () => {
    before((done) => {
      let user = {
        username: "testuser",
        password: "testpassword",
      };
      chai
        .request(server)
        .post("/api/auth/register")
        .send(user)
        .end((err, res) => {
          done();
        });
    });

    it("it should login a user", (done) => {
      let user = {
        username: "testuser",
        password: "testpassword",
      };
      chai
        .request(server)
        .post("/api/auth/login")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("token");
          done();
        });
    });
  });

  after(async () => {
    await User.deleteMany({});
  });
});
