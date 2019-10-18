'use-strict';

const connection = require('./connection');
const nanoid = require('nanoid');
const que = require('./que');

const newUser = async (req, res) => {
  req = req.params;
  req === '' || req === null
    ? res.status(400) && res.json('Please define a username!')
    : (await connection.query(que.user, [nanoid(), req.newUser, req.email])) &&
      (await connection.query(que.allUsers, (error, results) => {
        error ? res.send(error) : res.status(200) && res.json(results);
      }));
};

const newList = async (req, res) => {
  req = req.params;
  req === '' || req === null
    ? res.status(400) && res.json('Please define a todo list name!')
    : (await connection.query(que.list, [req.userId, nanoid(), req.newTodoList, req.reminder])) &&
      (await connection.query(que.todoList, req.userId, (error, results) => {
        error ? res.send(error) : res.status(200) && res.json(results);
      }));
};

const newTodo = async (req, res) => {
  req = req.params;
  req === '' || req === null
    ? res.status(400) && res.json('Please define a todo!')
    : (await connection.query(que.todo, [
        req.listId,
        nanoid(),
        req.newTodo,
        req.done,
        req.dueDate,
        req.tag,
      ])) &&
      (await connection.query(que.todos, req.listId, (error, results) => {
        error ? res.send(error) : res.status(200) && res.json(results);
      }));
};

module.exports = { newUser, newList, newTodo };
