// src/models/Deal.js
import { ObjectId } from "mongodb";

class Deal {
  constructor(database) {
    this.collection = database.collection("deal");
  }

  async getDealById(dealId) {
    return this.collection.findOne({ deal_id: dealId });
  }
}

export default Deal;
