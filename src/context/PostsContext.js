import { createContext, useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

export const PostsContext = createContext([]);

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const deletePost = async (id) => {
    setPosts(posts.filter((post) => post.id !== id));
    await deleteDoc(doc(db, "posts", id));
  };
  return (
    <PostsContext.Provider value={{ posts, setPosts, deletePost }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
