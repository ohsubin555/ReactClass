import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import SocialLogin from "./SocialLogin";

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="sociallogin" element={<SocialLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
