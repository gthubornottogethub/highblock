import { useEffect, useState } from "react";
import Post from "../post";
import "../../App.css";
const News = ()=>{
        const [posts, setPosts] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const postsPerPage = 6;
        useEffect ( ()=>{
            fetch("http://localhost:8080/").then(response => {
                response.json().then(allPosts=> {
                    const filteredPosts = allPosts.filter(post => post.category === "news");
                    //console.log(filteredPosts);
                    setPosts(filteredPosts);
                })
            })
        }, [] )
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
      
        // Function to handle the click event for the next button
        const nextPage = () => {
          setCurrentPage(prevPage => prevPage + 1);
        };
        return (
         <div>   
        <div className="postunitcontainer">
              { currentPosts.map(post => (
                     <Post key={post.id} title={post.title} content={post.content} img={post.imageLink} id={post._id} />
                     ))}
        </div>
        {posts.length > indexOfLastPost && (
        <button className="btnnews" onClick={nextPage}>{'<<'} اللي بعده</button>
      )}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
    )
};

export default News ; 