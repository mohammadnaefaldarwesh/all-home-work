'use strict';

const express = require('express');
const router = require('./routes');
const app = express();

app.use(express.json());

app.use('/todos', router);

app.listen(3020, () => console.log(`I am listening to http://localhost:3020`));
