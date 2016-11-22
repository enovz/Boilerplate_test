/**user middlewear defines what middlewears a request must go thru before reaching user resource*/

'use strict';

const middlewear = require('../../middlewear');

const usersMiddlewear = {
    hello: middlewear.hello,
    goodbye: middlewear.goodbye
}

module.exports = usersMiddlewear;