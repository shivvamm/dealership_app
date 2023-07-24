// src/models/User.js
import { ObjectId } from "mongodb";
import { formatError } from '../utils/error.mjs';

class User {
    constructor(database) {
        this.collection = database.collection("users");
    }

    async getUserById(userId) {
        try {
            const user = await this.collection.findOne({ _id: ObjectId(userId) });
            return user;
        } catch (err) {
            throw formatError(500, 'Error fetching user data');
        }
    }

    async getUserByEmail(email) {
        try {
            return this.collection.findOne({ user_email: email });
        } catch (err) {
            throw formatError(500, 'Error fetching user data');
        }
    }

    async getAllUsers() {
        try {
            return this.collection.find({}).toArray();
        } catch (err) {
            throw formatError(500, 'Error fetching users data');
        }
    }

}

export default User;
