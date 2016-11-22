/**Router resolves routing for a Resource that it belonges to.
 * A Router consist of routes and a routeHandler :
 *  1. routes define methods (GET,POST,PUT,DEL), urls (user, user/:id, so on) and actions (getAll, geById, so on)
 *  2. routerHandler runs middlewear
 *  3. routeHandler responds to a requests
 */

'use strict';

const restifyRouter = require('restify-router').Router;
const RouteHandler = require('./RouteHandler');

function getRouter(routes, controller, middlewear) {

    let router = new restifyRouter();
    let route_handler = new RouteHandler(controller, middlewear);

    routes.forEach(route => {
        router[route.method](route.url, (req, res, next) => {

            route_handler.runMiddlewear(req, res, next);
            route_handler.getResponse(req, res, route.action);
        });
    });

    return router;
}

module.exports = getRouter;