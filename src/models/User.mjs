// src/models/User.js
import { ObjectId } from "mongodb";

class User {
    constructor(database) {
        this.collection = database.collection("user");
    }

    async getUserByEmail(email) {
        return this.collection.findOne({ user_email: email });
    }

    async getAllUsers() {
        return this.collection.find({}).toArray();
    }

}

export default User;
