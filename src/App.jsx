import React, { useEffect } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MainHome from "./pages/MainHome";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import { setSocket } from "./redux/socketSlice";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";

import { setOnline } from "./redux/userSlice";

// Protect all route if user access without resources without login
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const App = () => {
  const isAuth = useSelector((store) => store.user.isAuth);
  const dispatch = useDispatch();
  let socket;

  useEffect(() => {
    socket = io("https://chattuserver.vercel.app", {
      query: {
        userId: isAuth?._id,
      },
    });

    dispatch(setSocket(socket));

    socket.on("getOnlineUser", (onlineUser) => {
      console.log(onlineUser);
      dispatch(setOnline(onlineUser));
    });

    return () => {
      socket.close();
    };
  }, [isAuth]);
  return (
    <>
      <Router>
        {isAuth && <Navbar />}
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <MainHome />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Routes>
          <Route path="/register" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <Routes>
          <Route
            path="/me"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
        {isAuth && <Footer />}
      </Router>
    </>
  );
};

export default App;
