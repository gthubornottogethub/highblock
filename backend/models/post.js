
const mongoose = require("mongoose");
const {Schema, model} = mongoose;
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imageLink: {
        type:String,
        required:true
    } ,
    category: {
        type: String,
        required: true
    }
});
const PostModel = model("Post", PostSchema);
module.exports = PostModel; 