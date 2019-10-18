'use-strict';

const connection = require('./connection');
const que = require('./que');

const markTodoAsDone = async (req, res) => {
  await connection.query(que.done, req.params.todoId);
  await connection.query(que.afterUpdateList, req.params.todoListId, (error, results) => {
    error ? res.send(error) : res.status(200) && res.json(results);
  });
};

module.exports = markTodoAsDone;
