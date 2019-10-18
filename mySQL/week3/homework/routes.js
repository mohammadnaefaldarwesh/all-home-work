'use-strict';

const express = require('express');
const router = express.Router();
const create = require('./create');
const get = require('./get');
const remove = require('./remove');
const update = require('./update');
const markTodoAsDone = require('./markTodoAsDone');

// users
router.post('/:newUser/:email', create.newUser);
router.put('/user/:userId', update.user);
router.get('/allUsers', get.allUsers);
router.delete('/user/:userId', remove.user);

// todolists
router.post('/:userId/:newTodoList/:reminder', create.newList);
router.put('/:userId/todoList/:todoListId/:reminder/:todoList', update.todoList);
router.get('/:userId/todoLists', get.todoLists);
router.delete('/todoList/:todoListId', remove.todoList);

// todos
router.post('/:listId/:newTodo/:done/:dueDate/:tag', create.newTodo);
router.put('/:todoListId/todo/:todoId/:todo/:dueDate/:tag', update.todo);
router.get('/:todoListId/todos', get.todos);
router.delete('/:todoListId/todo/:todoId', remove.todo);
router.put('/:todoListId/:todoId/done', markTodoAsDone);

module.exports = router;
