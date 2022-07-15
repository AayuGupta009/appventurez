"use strict";

// const db = require("../../db");
const Learner = require("../models/models.office");

exports.findAll = (req, res) => {
  var arr = Object.keys(req.body);
  console.log(arr[0]);
  Learner.findAll((err, result) => {
    console.log("In the Learner findAll");
    console.log(result);
    if (err) res.send({ status: "failure", message: err });
    else res.send({ status: "success", data: result });
  });
};

exports.findUser = (req, res) => {
  Learner.findUser(req.params.id, (err, result) => {
    console.log("In the Learner findByID");
    console.log(typeof result);
    if (err) res.send({ status: "failure", message: err });
    else {
      if (result.length == 0)
        res.send({ status: "success", data: "Not Found!!!" });
      else res.send({ status: "success", data: result });
    }
  });
};

exports.addUser = (req, res) => {
  Learner.addUser(req.body, (err, result) => {
    console.log("In the Learner addUser");
    if (err) res.send({ status: "failure", message: err });
    else res.send({ status: "User added successfully!!!", data: result });
  });
};

exports.deleteUser = (req, res) => {
  Learner.deleteUser(req.params.id, (err, result) => {
    console.log("In the Learner deleteUser");
    if (err) res.send({ status: "failure", message: err });
    else res.send({ status: "User deleted successfully", data: result });
  });
};

exports.updateUser = (req, res) => {
  Learner.updateUser(req.params.id, req.body, (err, result) => {
    console.log("In the Learner updateUser");
    if (err) res.send({ status: "failure", message: err });
    else res.send({ status: "User updated successfully", data: result });
  });
};

exports.updateWholeUser = (req, res) => {
  Learner.updateWholeUser(req.params.id, req.body, (err, result) => {
    console.log("In the Learner updateWholeUser");
    if (err) res.send({ status: "failure", message: err });
    else res.send({ status: "User updated successfully", data: result });
  });
};
