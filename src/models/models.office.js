"use strict";

const db = require("../../db");

const Learner = (data) => {
  (Name = data.Name), (Email = data.Email), (Course = data.Course);
};

Learner.findAll = (result) => {
  const query = "SELECT * FROM Learner";
  db.query("SELECT * FROM Learner", (err, data) => {
    if (err) result(null, err);
    else {
      result(null, data);
    }
  });
};

Learner.findUser = (id, result) => {
  const query = "SELECT * FROM Learner WHERE ID = ?";
  db.query(query, id, (err, data) => {
    if (err) return result(null, err);
    else {
      console.log(data);
      return result(null, data);
    }
  });
};

Learner.addUser = (info, result) => {
  console.log(info);
  const query = "INSERT INTO Learner set ?";
  db.query(query, info, (err, data) => {
    if (err) result(null, err);
    else {
      console.log(data);
      result(null, data);
    }
  });
};

Learner.deleteUser = (id, result) => {
  const query = "DELETE FROM Learner WHERE ID = ?";
  db.query(query, id, (err, data) => {
    if (err) result(null, err);
    else {
      console.log(data);
      result(null, data);
    }
  });
};

Learner.updateUser = (id, data, result) => {
  const query = `UPDATE Learner SET ? WHERE ID = ?`;
  console.log(query);
  db.query(query, [data, id], (err, data) => {
    if (err) result(null, err);
    else {
      console.log(data);
      result(null, data);
    }
  });
};

Learner.updateWholeUser = (id, data, result) => {
  const query = `UPDATE Learner SET Name = ? , Email = ? , Course = ? WHERE ID = ${id}`;
  db.query(query, [data.Name, data.Email, data.Course], (err, data) => {
    if (err) result(null, err);
    else {
      console.log(data);
      result(null, data);
    }
  });
};

module.exports = Learner;
