/**every middlewear has to have:
 * 1. success(){ next()}
 * 2. error(res){}
 */


'use strict';

function hello(req, res, next) {
    console.log('Hello from middlewear');
    next();
}

module.exports = hello;