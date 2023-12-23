const BaseModel = reqiure("./base-model");

class Groups {
  static schema = {
    name: String,
    user: String,
  };

  constructor(BaseModel) {}
}
