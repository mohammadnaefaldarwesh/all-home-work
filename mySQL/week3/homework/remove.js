'use-strict';

const connection = require('./connection');
const que = require('./que');

const user = async (req, res) => {
  await connection.query(que.removeUser, req.params.userId);
  await connection.query(que.allUsers, (error, results) => {
    error ? res.send(error) : res.status(200) && res.json(results);
  });
};

const todoList = async (req, res) => {
  await connection.query(que.removeList, req.params.todoListId);
  await connection.query(que.renderAfterList, (error, results) => {
    error ? res.send(error) : res.status(200) && res.json(results);
  });
};

const todo = async (req, res) => {
  await connection.query(que.removeTodo, req.params.todoId);
  await connection.query(que.todos, req.params.todoListId, (error, results) => {
    error ? res.send(error) : res.status(200) && res.json(results);
  });
};

module.exports = { user, todoList, todo };
