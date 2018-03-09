const express = require('express');
const fetch = require('node-fetch');

const app = express();
const controller = require('../controller/controller.js');

const PORT = 3000;

app.use(controller);

app.listen(PORT, console.log(`server listening on ${PORT}`));
