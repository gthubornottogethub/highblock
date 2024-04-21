
import { useEffect, useState } from "react";
import Post from "../post";
import "../../App.css";
const Commentary = ()=>{
        const [posts, setPosts] = useState([]);
        useEffect ( ()=>{
            fetch("http://localhost:8080/").then(response => {
                response.json().then(allPosts=> {
                    const filteredPosts = allPosts.filter(post => post.category === "commentary");
                    //console.log(filteredPosts);
                    setPosts(filteredPosts);
                })
            })
        }, [] )
        return (
        <div className="postunitcontainer">
              { posts.map(post => (
                <Post key={post._id} title={post.title} content={post.content} img={post.imageLink} id={post._id} />))}
        </div>
    )
};

export default Commentary ; 