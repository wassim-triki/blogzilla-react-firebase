import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import "./Post.css";
import { collection, deleteDoc, doc, query, where } from "firebase/firestore";
import { db } from "../firebase-config";
import { PostsContext } from "../context/PostsContext";
import useCollection from "../hooks/useFirestoreFetch";
const Post = ({ id, author, text, title, created }) => {
  const { user } = useContext(UserContext);
  const { deletePost } = useContext(PostsContext);
  const loggedInUser = user?.uid === author?.uid;

  return (
    <article className="post">
      <div className="post__author">
        <img className="post__authorImg" src={author.img} alt="" />
        <h3 className="post__authorName">@{author.authorName}</h3>
        {user && loggedInUser && (
          <IconButton
            onClick={() => deletePost(id)}
            className="delete-post"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        )}
      </div>
      <h2 className="post__title">{title}</h2>
      <p className="post__text">{text}</p>
      <time>{created}</time>
    </article>
  );
};

export default Post;
