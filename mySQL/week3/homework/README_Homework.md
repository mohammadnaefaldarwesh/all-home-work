# Databases Week3 Homework

## Follow the steps to use functions properly:

1 - Use the dump file as source from mysql prompt to make your entire database ready to be used:
`source path/to/the/dump/file/ToDoApp_dump.sql`

2 - Run the application with the command `node index.js`

3 - You should run the functions by

    - selecting proper method

    - using proper url

    - inputting necessary information if needed at request_url in postman

## Functions:

**Users Part:**

    - To create a new user:
    `(POST) http://localhost:3010/ToDoApp/:newUser/:email`
    Example:
    `(POST) http://localhost:3010/ToDoApp/mike/mike@hotmail.com`
    The out put will be :

      {
        "user": "mike",
        "email": "mike@hotmail.com",
      }

    - To update a user:
    `(PUT) http://localhost:3010/ToDoApp/user/:userId`

    - To get all users:
    `(GET) http://localhost:3010/ToDoApp/allUsers`


    To remove a user:
    `(DELETE) http://localhost:3010/ToDoApp/user/:userId`

**Todo Lists Part:**

    - To create a new todo list:
    `(POST) http://localhost:3010/ToDoApp/:userId/newTodoList`
    Example :
    `(POST) http://localhost:3010/ToDoApp/546565646/furniture/20-12-2019`
    The out put will be :
      {
        "todoListName": "furniture", (varchar(50))
        "reminder": "20-12-2019", (datetime)
      }

    - To update a todo list:
    `(PUT) http://localhost:3010/ToDoApp/:userId/todoList/:todoListId/:reminder/:todoList`

    - To retrieve todo lists belong to a certain user:
    `(GET) http://localhost:3010/ToDoApp/:userId/todoLists`


    - To remove a todo list:
    `(DELETE) http://localhost:3010/ToDoApp/todoList/:todoListId`

**Todos Part:**

    - To create a new todo:
    `(POST) http://localhost:3010/ToDoApp/:listId/:newTodo/:done/:dueDate/:tag`

    - To update a todo:
    `(PUT) http://localhost:3010/ToDoApp/:todoListId/todo/:todoId/:todo/:dueDate/:tag`

    - To retrieve todos belong to a certain todo list:
    `(GET) http://localhost:3010/ToDoApp/:todoListId/todos`

    - To remove a todo:
    `(DELETE) http://localhost:3010/ToDoApp/:todoListId/todo/:todoId`

    - To mark a todo as done:
    `(PUT) http://localhost:3010/ToDoApp/:todoListId/:todoId/done`

```

```
