import React, { useEffect, useState, useContext } from "react";
import { db } from "../firebase-config";
import { PostsContext } from "../context/PostsContext";
import Post from "./Post";
import "./Home.css";
import useCollection from "../hooks/useFirestoreFetch";
const Home = () => {
  const { data, isLoading, error } = useCollection(db, "posts", "created");
  const { posts, setPosts } = useContext(PostsContext);
  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <section className="section">
      <h2 className="page-header">Posts</h2>
      <div className="posts">
        {error && <h1>Something went wrong...</h1>}
        {isLoading && <h2 className="loading">Loading...</h2>}
        {posts.length ? (
          posts.map((post) => <Post key={post.id} {...post} />)
        ) : (
          <h2 className="loading">No posts yet.</h2>
        )}
      </div>
    </section>
  );
};

export default Home;
