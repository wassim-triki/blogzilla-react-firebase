import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";
import UserProvider from "./context/UserContext";
import PostsProvider from "./context/PostsContext";

const App = () => {
  return (
    <UserProvider>
      <PostsProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </PostsProvider>
    </UserProvider>
  );
};

export default App;
