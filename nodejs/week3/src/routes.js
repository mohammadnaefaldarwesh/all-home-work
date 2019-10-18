'use strict';

const express = require('express');
const router = express.Router();

const {
  addItem,
  getAllItems,
  getOneItem,
  markAsDone,
  markAsNotDone,
  removeAllItems,
  removeToDo,
  updateToDo,
} = require('./main');

router.get('/', getAllItems);
router.get('/:id', getOneItem);
router.post('/', addItem);
router.post('/:id/:done', markAsDone);
router.delete('/:id/:done', markAsNotDone);
router.put('/:id', updateToDo);
router.delete('/:id', removeToDo);
router.delete('/', removeAllItems);

module.exports = router;
