process.env.NODE_ENV = "test";

require("dotenv").config();
const mongoose = require("mongoose");
const Task = require("../src/models/Task");
const User = require("../src/models/User");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server");
const should = chai.should();

chai.use(chaiHttp);

describe("Tasks", () => {
  let token;
  let userId;

  before(async () => {
    await User.deleteMany({});
    await Task.deleteMany({});

    const user = new User({ username: "testuser", password: "testpassword" });
    await user.save();
    userId = user._id;

    const res = await chai.request(server)
      .post("/api/auth/login")
      .send({ username: "testuser", password: "testpassword" });

    token = res.body.token;
  });

  describe("/GET tasks", () => {
    it("it should GET all the tasks for the logged in user", (done) => {
      chai.request(server)
        .get("/api/tasks")
        .set("Authorization", `Bearer ${token}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe("/POST task", () => {
    it("it should POST a task", (done) => {
      const task = {
        title: "Test Task",
        description: "Test Description"
      };
      chai.request(server)
        .post("/api/tasks")
        .set("Authorization", `Bearer ${token}`)
        .send(task)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.body.should.have.property("title").eql("Test Task");
          res.body.should.have.property("description").eql("Test Description");
          res.body.should.have.property("userId").eql(userId.toString());
          done();
        });
    });
  });

  describe("/PUT/:id task", () => {
    it("it should UPDATE a task given the id", async () => {
      const task = new Task({ title: "Test Task", description: "Test Description", userId: userId });
      await task.save();

      const updatedTask = {
        title: "Updated Task",
        description: "Updated Description"
      };

      chai.request(server)
        .put(`/api/tasks/${task._id}`)
        .set("Authorization", `Bearer ${token}`)
        .send(updatedTask)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("title").eql("Updated Task");
          res.body.should.have.property("description").eql("Updated Description");
        });
    });
  });

  describe("/DELETE/:id task", () => {
    it("it should DELETE a task given the id", async () => {
      const task = new Task({ title: "Test Task", description: "Test Description", userId: userId });
      await task.save();

      chai.request(server)
        .delete(`/api/tasks/${task._id}`)
        .set("Authorization", `Bearer ${token}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("Task deleted successfully");
        });
    });
  });

  after(async () => {
    await User.deleteMany({});
    await Task.deleteMany({});
  });
});