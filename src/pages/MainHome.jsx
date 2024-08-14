import React from "react";
import { Link } from "react-router-dom";
import ravibabu from "../assets/ravibabu.jpg";

const MainHome = () => {
  return (
    <>
      <div className="hero min-h-screen bg-cover bg-center bg-fixed m-3 rounded-lg" style={{ backgroundImage: 'url("https://source.unsplash.com/random/1920x1080?technology")' }}>
        <div className="hero-overlay bg-opacity-70 bg-black"></div>
        <div className="hero-content flex-col lg:flex-row-reverse items-center lg:items-start p-8">
          <img
            src={ravibabu}
            className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-2xl mb-6 lg:mb-0 lg:ml-6"
            alt="Ravi Babu"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-blue-200">
              Welcome To Chattu!
            </h1>
            <h3 className="py-3 font-bold text-white text-xl">
              Chattu is a Chat application built for real-time communication with your team
            </h3>
            <p className="py-6 text-lg font-semibold text-gray-200">
              Ravi Bhushan, the visionary founder of Chattu, is a seasoned entrepreneur known for his passion for technology and innovation. With a background in computer science and a keen interest in enhancing communication tools, Ravi embarked on a journey to revolutionize how teams collaborate and communicate.
            </p>
            <Link to={"/home"} className="btn btn-primary font-bold text-white hover:btn-info hover:text-white">
              Start Chatting
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default MainHome;
