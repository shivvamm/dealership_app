// src/models/Admin.js
class Admin {
    constructor(database) {
        this.collection = database.collection("admin");
    }

    async getAdminById(adminId) {
        return this.collection.findOne({ admin_id: adminId });
    }

}

export default Admin;
