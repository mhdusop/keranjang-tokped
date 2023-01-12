import mongoose from "mongoose";

const Product = mongoose.Schema({
    name: String,
    desc: String,
    image: String,
    price: Number
});

export default mongoose.model('Product', Product)

