
import { useEffect, useState } from "react";
import Post from "../post";
import MediaPost from "../mediaPost";
import "../../App.css";
const Media = ()=>{
        const [posts, setPosts] = useState([]);
        useEffect ( ()=>{
            fetch("http://localhost:8080/").then(response => {
                response.json().then(allPosts=> {
                    const filteredPosts = allPosts.filter(post => post.category === "media");
                    //console.log(filteredPosts);
                    setPosts(filteredPosts);
                })
            })
        }, [] )
        return (
        <div className="postunitcontainer">
              { posts.map(post => (
                     <MediaPost key={post._id} title={post.title}  content={post.content} vid={post.imageLink} id={post._id} />))}
        </div>
    )
};

export default Media ; 