import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Headerrr from "./header_meshAwi";
import Footer from "./footer";
import "./fullPost.scss";

const FullPost = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch post data when the id parameter changes
    fetch(`http://localhost:8080/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch post data');
        }
        return response.json();
      })
      .then(postInfo => {
        setPostInfo(postInfo);
      })
      .catch(error => {
        console.error('Error fetching post data:', error);
        // Handle error fetching data
      });
  }, [id]); // Update effect when id changes

  return (
    <div>
      {postInfo ? (
        <>
          <Headerrr />
          <br/>
          <br/>
          <h1>{postInfo.title}</h1>
          <br>
          </br>
          <br></br>
          <div className="postimg">
            <img src={postInfo.imageLink} alt={postInfo.title} />
            <p className="content">{postInfo.content}</p>
          </div>
          
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FullPost;