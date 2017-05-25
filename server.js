(() => {
    'use strict';
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 3000;
    const mongoose = require('mongoose');
    const Task = require('./models/task-model');
    const bodyParser = require('body-parser');

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/todolist');


    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());


    var routes = require('./routes/task-routes');
    routes(app);

    app.listen(port);

    console.log('API rodando na porta ' + port)
})();