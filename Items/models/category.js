const { Schema, model } = require("mongoose");

const ItemSchema = new Schema({
  name: { type: String },
  items: [{type: Schema.Types.ObjectId, ref: 'items'}]
});

module.exports = model("Category", ItemSchema);