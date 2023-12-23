const BaseModel = reqiure("./base-model");

class Notes {
  static schema = {
    note: String,
    author: String,
    images: [String],
    user: String,
  };

  constructor(BaseModel) {}
}
