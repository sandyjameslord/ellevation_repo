const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    districtName: String,
    csv_file_name: String
});

module.exports = mongoose.model("Product", ProductSchema);