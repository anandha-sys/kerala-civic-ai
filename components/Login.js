"use client";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Login() {

  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    alert("Login Successful");
  };

  return (
    <button
      onClick={login}
      style={{
        background: "#22c55e",
        color: "white",
        padding: "12px 20px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer"
      }}
    >
      Login with Google
    </button>
  );
}
