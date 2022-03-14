import mongoose from "mongoose";

const schema = mongoose.Schema({
    author: String,
    title: String,
    description :String,
    files: String,
},
    {typeKey:"$type"}
);

const model = mongoose.model("news",schema);

export default model;