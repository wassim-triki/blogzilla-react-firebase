import {
  collection,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState, useContext } from "react";
import { db } from "../firebase-config";
import { PostsContext } from "../context/PostsContext";
import Post from "./Post";
import "./Home.css";
const Home = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        const data = await getDocs(
          query(collection(db, "posts"), orderBy("created", "desc"))
        );
        setPosts(
          data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
        setError("");
      } catch (e) {
        setError("Oups! Something Went Wrong...");
      } finally {
        setIsLoading(false);
      }
    };
    getPosts();
  }, []);
  return (
    <section className="section">
      <h2 className="page-header">Posts</h2>
      <div className="posts">
        {error && <h1>Something went wrong...</h1>}
        {isLoading && <h2 className="loading">Loading...</h2>}
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Home;
