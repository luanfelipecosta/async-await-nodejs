(() => {
    'use strict';
    'use strict';
    module.exports = function (app) {
        const taskController = require('../controllers/task-controller');
        app.route('/tasks')
            .get(taskController.get)
            .post(taskController.post);
    };

})();