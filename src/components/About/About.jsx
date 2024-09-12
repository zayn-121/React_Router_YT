import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link to="about">
        <h1 className="text-3xl font-bold">This is About Section</h1>
      </Link>
    </div>
  );
};

export default About;
