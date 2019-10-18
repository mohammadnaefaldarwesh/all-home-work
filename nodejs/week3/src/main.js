'use strict';

const { add, get, getOne, done, notDone, update, remove, removeAll } = require('./actions');
const error = 'Please define a task!';
const err = 'Please define a valid id!';

class Main {
  static addItem(req, res) {
    const task = req.body.task;
    !task ? res.status(400) && res.json(error) : res.status(201) && res.json(add(task));
  }

  static getAllItems(req, res) {
    res.status(200);
    res.json(get());
  }

  static getOneItem(req, res) {
    const id = req.params.id;
    getOne(id) ? res.status(206) && res.json(getOne(id)) : res.status(400) && res.json(err);
  }

  static markAsDone(req, res) {
    const id = req.params.id;
    getOne(id) ? res.status(206) && res.json(done(id) && get()) : res.status(400) && res.json(err);
  }

  static markAsNotDone(req, res) {
    const id = req.params.id;
    getOne(id)
      ? res.status(206) && res.json(notDone(id) && get())
      : res.status(400) && res.json(err);
  }

  static removeAllItems(req, res) {
    res.status(204) && res.json(removeAll() && get());
  }

  static removeToDo(req, res) {
    const id = req.params.id;
    getOne(id)
      ? res.status(200) && res.json(remove(id) && get())
      : res.status(400) && res.json(err);
  }

  static updateToDo(req, res) {
    const id = req.params.id;
    getOne(id)
      ? res.status(206) && res.json(update(id, req.body.task) && get())
      : res.status(400) && res.json(err);
  }
}
const {
  addItem,
  getAllItems,
  getOneItem,
  markAsDone,
  markAsNotDone,
  removeAllItems,
  removeToDo,
  updateToDo,
} = Main;

module.exports = {
  addItem,
  getAllItems,
  getOneItem,
  markAsDone,
  markAsNotDone,
  removeAllItems,
  removeToDo,
  updateToDo,
};
