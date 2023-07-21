// src/models/Deal.js
import { ObjectId } from "mongodb";

class Deal {
  constructor(database) {
    this.collection = database.collection("deal");
  }

  async getDealById(dealId) {
    try{
    return this.collection.findOne({ deal_id: dealId });
    }catch (err) {
      throw formatError(500, 'Error fetching Deal data');
    }
  }
}

export default Deal;
