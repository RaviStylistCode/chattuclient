import React from "react";
import { Link } from "react-router-dom";
import ravibabu from "../assets/ravibabu.jpg"

const MainHome = () => {
  return (
    <>
      <div className="hero min-h-screen  bg-gray-400 m-3 rounded">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={ravibabu}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl  font-bold text-info">
              Welcome To Chattu!
            </h1>
            <h3 className="p-3 font-bold text-white text-xl">Chattu is a Chat application built for real time communication with your team</h3>
            <p className="py-6 text-xl font-semi-bold wrap justify-start text-gray-200">
            Ravi Bhushan, the visionary founder of Chattu, is a seasoned entrepreneur known for his passion for technology and innovation. With a background in computer science and a keen interest in enhancing communication tools, Ravi embarked on a journey to revolutionize how teams collaborate and communicate.
            </p>
            <Link to={"/home"} className="btn btn-primary text-white font-bold hover:btn-info hover:text-white">
              Start Chatting
            </Link>
          </div>
        </div>
      </div>

      <div className="collapse bg-base-200 m-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-gray-400 font-bold text-primary-content peer-checked:bg-gray-400 peer-checked:text-secondary-content">
          <h2 className="text-white text-[20px]">About Chattu's Founder</h2>
        </div>
        <div className="collapse-content bg-gray-500  text-primary-content peer-checked:bg-ghost peer-checked:text-secondary-content">
          <p>
            {" "}
            <h3 className="m-3 p-2 text-xl font-semibold">
            Born with a natural curiosity for computers and technology, Ravi Bhushan pursued his Bachelor of Science in Information Technology (BSc-IT) at CIMAGE College, Patna. Throughout his academic career, he demonstrated a strong aptitude for programming languages, system architecture, and software development methodologies.
            </h3>

            <h3 className="m-3 p-2 text-xl font-semibold">
            His time at CIMAGE College provided Ravi with a solid foundation in both theoretical concepts and practical skills essential for a career in IT. Courses in database management, web development, and software engineering equipped him with the knowledge needed to understand the intricacies of building robust applications.
            </h3>
            <h3 className="m-3 p-2 text-xl font-semibold">
            Driven by a passion to apply his classroom learning in real-world scenarios, Ravi embarked on developing a full-stack chat application. Drawing from his coursework and self-study, he mastered technologies such as JavaScript, Node.js, React, and MongoDB, among others, to create a seamless and secure platform for team communication.
            </h3>
            <h3 className="m-3 p-2 text-xl font-semibold">
            Ravi's educational journey wasn't just about acquiring technical skills; it also nurtured his problem-solving abilities and collaborative spirit. He actively participated in coding competitions, hackathons, and workshops, where he sharpened his coding prowess and learned to work effectively in teams.
            </h3>
            <h3 className="m-3 p-2 text-xl font-semibold">
            As he continues to evolve as a tech entrepreneur, Ravi remains grateful for the foundational education and opportunities for growth provided by CIMAGE College, which laid the groundwork for his impactful contributions to the field of IT and beyond.
            </h3>
          </p>
        </div>
      </div>
    </>
  );
};

export default MainHome;
