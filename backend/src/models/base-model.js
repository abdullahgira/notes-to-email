class BaseModel {
  constructor(model) {
    this.model = model;
  }

  async add(data) {
    // https://firebase.google.com/docs/firestore/manage-data/add-data?hl=en&authuser=0#add_a_document
    return await db.collection(this.model).add(data);
  }

  async update(id, data) {
    // https://firebase.google.com/docs/firestore/manage-data/add-data?hl=en&authuser=0#update-data
    return await db.collection(this.model).doc(id).update(data);
  }

  async getAll() {
    // https://firebase.google.com/docs/firestore/query-data/get-data?hl=en&authuser=0#get_all_documents_in_a_collection
    return await db.collection(this.model).get();
  }

  async getById(id) {
    // https://firebase.google.com/docs/firestore/query-data/get-data?hl=en&authuser=0#get_a_document
    return await db.collection(this.model).doc(id).get();
  }

  async filter(query = []) {
    // https://firebase.google.com/docs/firestore/query-data/queries?hl=en&authuser=0#simple_queries
    return await modelsRef.where(...query).get();
  }

  async delete(id) {
    // https://firebase.google.com/docs/firestore/manage-data/delete-data?hl=en&authuser=0#delete_documents
    return await db.collection(this.model).doc(id).delete();
  }
}

module.exports = BaseModel;
