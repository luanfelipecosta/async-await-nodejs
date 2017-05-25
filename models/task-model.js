(() => {
    'use strict';
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const taskSchema = new Schema({
        name: {
            type: String,
            Required: 'Kindly enter the name of the task'
        },
        date: {
            type: Date,
            default: Date.now
        },
        status: {
            type: [{
                type: String,
                enum: ['pending', 'ongoing', 'completed']
            }],
            default: ['pending']
        }
    });

    module.exports = mongoose.model('Task', taskSchema);
})()