import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    !user && navigate("/");
  });
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const createPost = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "posts"), {
      title,
      text,
      created: new Date().toLocaleString("fr-FR"),
      author: {
        img: user.img,
        authorName: user?.username,
        uid: user?.uid,
        email: user?.email,
      },
    });
    navigate("/");
  };
  const userShortName = user?.username.slice(0, user?.username.indexOf(" "));
  return (
    <div className="create-post section">
      <h3 className="create-post__header page-header">Create a new post</h3>
      <form className="create-post__form" onSubmit={(e) => createPost(e)}>
        <input
          type="text"
          className="create-post__title"
          placeholder="Title..."
          value={title}
          onChange={handleTitleChange}
          required
        />
        <textarea
          className="create-post__text"
          cols="30"
          rows="10"
          placeholder={`What's on your mind, ${userShortName}?`}
          value={text}
          onChange={handleTextChange}
          required
        ></textarea>
        <button className="btn btn-post" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
