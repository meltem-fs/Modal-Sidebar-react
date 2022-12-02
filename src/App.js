import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Documents from "./pages/Documents";
import Calendar from "./pages/Calendar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />}>
            <Route path="sidebar" element={<Sidebar />} />
            <Route path="team" element={<Team/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="documents" element={<Documents/>}/>
            <Route path="calendar" element={<Calendar/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
