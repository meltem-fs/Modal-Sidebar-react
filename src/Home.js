import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false)

  console.log(toggle);

  return (
    <div>
      {!toggle && (
        <FaBars
        className="hamb"
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
      {!modal && <button className="modal_btn" onClick={() => setModal(!modal)}>MODAL</button>}
      {modal && <Modal setModal={setModal} modal={modal} />}
      <Outlet />
    </div>
  );
};

export default Home;
