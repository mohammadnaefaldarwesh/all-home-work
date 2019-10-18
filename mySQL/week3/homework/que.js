'use-strict';

// create query:

const todo = `INSERT INTO todos VALUES(?,?,?,?,STR_TO_DATE( ?, '%d-%m-%Y %H:%i:%s'),?)`;
const list = `INSERT INTO todolists VALUES(?,?,?,STR_TO_DATE( ?, '%d-%m-%Y %H:%i:%s'))`;
const user = `INSERT INTO users VALUES(?, ?, ?)`;

// get query:
const todos = `SELECT * FROM todos WHERE ToDoList_Id = ?`;
const todoList = `SELECT * FROM todolists WHERE User_Id = ?`;
const allUsers = 'SELECT * FROM users';
// mark todo as done query:
const done = `UPDATE todos SET Done = 'true' WHERE Todo_Id = ?;`;
// remove query:
const removeUser = `DELETE FROM users WHERE User_Id = ? LIMIT 1`;
const removeList = `DELETE FROM todolists WHERE ToDoList_Id = ? LIMIT 1`;
const renderAfterList = `SELECT * FROM todolists`;
const removeTodo = `DELETE FROM todos WHERE Todo_Id = ? LIMIT 1`;

// update query:
const updateTodo = `UPDATE todos SET Todo_Name = ?,
                    Due_date = STR_TO_DATE( ?, '%d-%m-%Y %H:%i:%s'),Tag = ? WHERE Todo_Id = ?;`;
const updateList = `UPDATE todolists 
                    SET ToDoList_Name = ?,
                    Reminder = STR_TO_DATE( ?, '%d-%m-%Y %H:%i:%s')
                    WHERE ToDoList_Id = ?;`;

const updateUser = `UPDATE users SET Name = ?,Email = ? WHERE User_Id = ?;`;

module.exports = {
  todo,
  done,
  removeUser,
  removeList,
  renderAfterList,
  removeTodo,
  updateTodo,
  updateList,
  updateUser,
  list,
  user,
  todos,
  todoList,
  allUsers,
};
