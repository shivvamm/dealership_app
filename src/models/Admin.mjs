// src/models/Admin.js
class Admin {
    constructor(database) {
        this.collection = database.collection("admin");
    }

    async getAdminById(adminId) {
        try {
            return this.collection.findOne({ admin_id: adminId });
        } catch (err) {
            throw formatError(500, 'Error fetching Admin data');
        }
    }

}

export default Admin;
