import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import Button from "@mui/material/Button";
import "./Navbar.css";
import { UserContext } from "../context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setUser(null);
    });
  };
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="title">
          <ChromeReaderModeIcon />
          <div className="title__text">Blogzilla</div>
        </div>
      </Link>

      <div className="link-container">
        {user ? (
          <>
            <Link to="createpost">
              <Button className="btn">Post</Button>
            </Link>
            <Link to="/">
              <Button onClick={signOutUser} className="btn">
                Logout
              </Button>
            </Link>
            <img className="user-img" src={user.img} />
          </>
        ) : (
          <Link to="login">
            <Button className="btn">Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
