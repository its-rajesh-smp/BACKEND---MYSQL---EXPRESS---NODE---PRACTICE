const db = require("../util/database")


module.exports = User = class {
    static loginUser(userEmail) {
        return db.execute("SELECT * FROM user_table WHERE userEmail = ?", [userEmail])
    }

    constructor(userEmail, userName) {
        this.userEmail = userEmail
        this.userName = userName
    }

    createUser() {
        return db.execute("INSERT INTO user_table (userEmail,userName) VALUES (?,?)", [this.userEmail, this.userName])
    }
}