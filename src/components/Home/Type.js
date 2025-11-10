import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Python Developer",
          "Backend Engineer", 
          "Full-Stack Developer",
          "AI/ML Enthusiast",
          "Freelance Developer",
          "FastAPI Specialist",
          "React Developer",
          "Open Source Contributor",
          "Cloud Developer",
          "GenAI Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
