'use-strict';

const connection = require('./connection');
const que = require('./que');

const todo = async (req, res) => {
  req = req.params;
  req === '' || req === null
    ? res.status(400) && res.json('Please define a todo name!')
    : await connection.query(que.updateTodo, [req.todo, req.dueDate, req.tag, req.todoId]);
  await connection.query(que.renderAfterTodo, req.todoListId, (error, results) => {
    error ? res.send(error) : res.status(200) && res.json(results);
  });
};

const todoList = async (req, res) => {
  const req = req.params;
  req === '' || req === null
    ? res.status(400) && res.json('Please define a todo list name!')
    : await connection.query(que.updateList, [req.todoList, req.reminder, req.todoListId]);
  await connection.query(que.todoList, req.userId, (error, results) => {
    error ? res.send(error) : res.status(200) && res.json(results);
  });
};

const user = async (req, res) => {
  req = req.params;
  req.user === '' || req.user === null
    ? res.status(400) && res.json('Please define a user name!')
    : (await connection.query(que.updateUser, [req.user, req.email, req.userId])) &&
      (await connection.query(que.allUsers, (error, results) => {
        error ? res.send(error) : res.status(200) && res.json(results);
      }));
};

module.exports = { todo, todoList, user };
