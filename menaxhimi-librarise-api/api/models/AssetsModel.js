import mongoose from "mongoose";

const schema = mongoose.Schema({
    type: String,
    price: Number,
    files: String,
},
    {typeKey:"$type"}
);

const model = mongoose.model("assets",schema);

export default model;