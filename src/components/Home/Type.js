import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Product Manager",
          "MERN Stack Developer",
          "Project Manager",
          "Scrum Master",
          "Lean Six Sigma Coach",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
