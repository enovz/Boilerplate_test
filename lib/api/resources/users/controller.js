/*let User = require(./User);*/
 

'use strict';

class UserController {

    constructor() {
        this.inMemoStorage = [
            {id: 1, name: "user1"},
            {id: 2, name: "user2"},
            {id: 1, name: "user3"}
        ];     
    }

    getAll() {
        let result = this.inMemoStorage;
        return result;
    }
    getById(user) {

        let result = this.inMemoStorage.filter(user_in_memo => user_in_memo.id === user.id);
        return result ? result[0] : null;
    }
    //test
    create(user) {

        let tempLength = this.inMemoStorage.length;
        let userID = ++tempLength;

        this.inMemoStorage.push({ id: userID, name: user.name });

        if (this.inMemoStorage.length === tempLength++) {
            return "ok";
        }
    }
    update(user) {

        let result = this.inMemoStorage.filter(user_in_memo => user_in_memo.id === user.id);
        if(result[0]){
            result[0].name = user.name;
        }
        return result ? result[0] : null;
    }
    remove(user) {

        this.inMemoStorage.forEach(user_in_memo => {
            console.log(user_in_memo);

            if (user_in_memo.id === user.id) {
                this.inMemoStorage.splice(this.inMemoStorage.indexOf(user_in_memo), 1);
            }
        });

        return "ok";
    }
}

module.exports = new UserController();