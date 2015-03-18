var routes = require('../routes');
exports.route = function( app ){

    app.get('/', routes.index);

    app.get('/test', routes.test);
};