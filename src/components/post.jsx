import React from "react";
import "../App.css";
import "./post.scss"
import { Link } from "react-router-dom";

const Post = ({ title, content, img, key, id }) => {
  console.log(id);
  return (
    <section className="yoo">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div class="article-body">
        <h2>{title}</h2>
        <div>
           {content}
        </div>
        <Link to={`/${id}`} class="read-more">
          Read more 
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
  <br></br>
  <br></br>
  <br></br>
</section>
  );
};

export default Post;

/* <div className="postunit">
      <h1>{title}</h1>
      <div>{content}</div>
    </div> */