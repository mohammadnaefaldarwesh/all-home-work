'use strict';

const low = require('lowdb');
const nanoid = require('nanoid');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const state = {
  todos: [],
};
db.defaults(state).write();

class Actions {
  static get() {
    return db.get('todos').value();
  }

  static getOne(id) {
    return db
      .get('todos')
      .find({ id })
      .value();
  }

  static add(task) {
    return db
      .get('todos')
      .push({ id: nanoid(), task: task, done: false })
      .write();
  }

  static done(id) {
    return db
      .get('todos')
      .find({ id })
      .assign({ done: true })
      .write();
  }

  static notDone(id) {
    return db
      .get('todos')
      .find({ id })
      .assign({ done: false })
      .write();
  }

  static update(id, newId) {
    return db
      .get('todos')
      .find({ id })
      .assign({ task: newId })
      .write();
  }

  static remove(id) {
    return db
      .get('todos')
      .remove({ id })
      .write();
  }

  static removeAll(todos) {
    return db
      .get('todos')
      .remove(todos)
      .write();
  }
}

const { add, getOne, done, notDone, update, remove, removeAll, get } = Actions;

module.exports = {
  add,
  get,
  getOne,
  done,
  notDone,
  update,
  remove,
  removeAll,
};
