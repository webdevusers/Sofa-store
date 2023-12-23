const {Schema, model} = require('mongoose')

const items = new Schema({
    name: String,
    desc: String,
    price: Number,
    images: Array,
    categoryID: {type: Schema.Types.ObjectId}
})

module.exports = model('items', items)