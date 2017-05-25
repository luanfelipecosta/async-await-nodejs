(() => {
    'use strict';
    const mongoose = require('mongoose');
    const Task = mongoose.model('Task');

    exports.get = async () => {
        const tasks = await Task.find({});
        return tasks;
    }

    exports.getById = async (id) => {
        const tasks = await Task.findById(id);
        return tasks;
    }

    exports.save = async (body) => {
        var task = new Task(body);
        const res = await task.save();
        return res;
    }
})();