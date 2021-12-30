import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user);
      const user = {
        uid: result.user.uid,
        username: result.user.displayName,
        email: result.user.email,
        img: result.user.photoURL,
      };
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigate("/");
    });
  };

  return (
    <div className="login">
      <h2 className="page-header">Please login with Google</h2>
      <button
        onClick={signInWithGoogle}
        type="button"
        className="login-with-google-btn"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
