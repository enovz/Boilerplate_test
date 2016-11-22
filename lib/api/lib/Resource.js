/** Every Resource has a router: 
 *  1. to construct a router we need to provide a controller and routes 
 * 
 */

/**maby set middlewear here ? kinda makes sense since every resouce needs some kind of auth 
 * and send middlewear to getRouter.
*/

'use strict';

const fs = require('fs');
const path = require('path');
const getRouter = require('./getRouter');

class Resource {
    constructor(resources_dir, resource_name) {

        this.resource_controller = require(path.join(resources_dir, resource_name) + '/controller');
        this.resource_routes = require(path.join(resources_dir, resource_name) + '/routes');
        this.resource_middlewear = require(path.join(resources_dir, resource_name) + '/middlewear');

        this.name = resource_name;         
        this.router = getRouter(this.resource_routes, this.resource_controller, this.resource_middlewear);
    }
}

module.exports = Resource;