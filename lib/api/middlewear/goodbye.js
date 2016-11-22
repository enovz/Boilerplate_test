/**every middlewear has to have:
 * 1. success(){ next()}
 * 2. error(res){}
 */


'use strict';

function goodbye(req, res, next) {
    console.log('Goodbye from middlewear');
    next();
}

module.exports = goodbye;