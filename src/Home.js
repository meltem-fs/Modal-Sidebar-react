import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  return (
    <div>
      {!toggle && (
        <FaBars
          style={{
            color: "#49A6E9",
            fontSize: "3rem",
            margin: "2rem",
            cursor: "pointer",
          }}
          onClick={() => setToggle(true)}
        />
      )}
      {toggle && <Sidebar toggle setToggle={setToggle} />}
    </div>
  );
};

export default Home;
