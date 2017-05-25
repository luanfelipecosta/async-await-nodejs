(() => {
    'use strict';
    const mongoose = require('mongoose');
    const Task = mongoose.model('Task');
    var repository = require('../repositories/task-repository');

    exports.get = async (req, res) => {
        try {
            const tasks = await repository.get();
            res.send(tasks);
        } catch (ex) {
            res.status(500).end();
        }
    };

    exports.post = async (req, res) => {
        try {
            const tasks = await repository.save(req.body);
            res.send(tasks);
        } catch (ex) {
            res.status(500).end();
        }
    };

})();