import React from "react";
import "./Post.css";
const Post = ({ author, text, title, created }) => {
  return (
    <article className="post">
      <div className="post__author">
        <img className="post__authorImg" src={author.img} alt="" />
        <h3 className="post__authorName">@{author.authorName}</h3>
      </div>
      <h2 className="post__title">{title}</h2>
      <p className="post__text">{text}</p>
      <time>{created}</time>
    </article>
  );
};

export default Post;
