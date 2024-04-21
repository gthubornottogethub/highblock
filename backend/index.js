
const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/post");
const app = express();
const cors = require("cors");
require('dotenv').config();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI)
.then(result => {
    console.log("connected to the database");
}).catch( err => {
    console.log("feh moskela:", err.message);
});
app.post("/", async (req, res)=> { 
    try {
        const {title, content, category, imageLink} = req.body; 
        const newPost = new Post({title, content, category, imageLink});
        await newPost.save();
        res.json({message:`post added, it has the title ${title} and content ${content}`});
    } catch (err) {
        console.error(err);
        res.status(500).json("moshkela kbira gedan");
    };
});

app.get("/", async (req, res) => {
    try {
      const allPosts = await Post.find();
      res.json(allPosts);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.get("/:id", async (req,res)=>{
    const {id} = req.params;
    const postDoc = await Post.findById(id);
    res.json(postDoc);
})

app.listen(8080, ()=> { 
    console.log("server running on port 8080 no cap");
});