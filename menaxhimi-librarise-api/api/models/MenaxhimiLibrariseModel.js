import mongoose from "mongoose";

const schema = mongoose.Schema({
    type: String,
    author: String,
    title: String,
    page :Number,
    price: Number,
    files: String,
    //userId: String,
},
    {typeKey:"$type"}
);

const model = mongoose.model("menaxhimilibrarises",schema);

export default model;