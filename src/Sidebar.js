import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import SidebarStylehead from "./style/Sidebar.styled";
import Sidebardadstyle from "./style/Sidebardad.styled";
import { Link } from "react-router-dom";
import { LinksStyle } from "./style/Sidebardad.styled";
import { SocialStyle } from "./style/Sidebardad.styled";

const Sidebar = ({ toggle, setToggle }) => {
  console.log(toggle);

  return (
    <Sidebardadstyle>
      <SidebarStylehead>
        <img src={logo} alt="{logo}" />
        <FaTimes
          style={{
            color: "ff0000",
            fontSize: "2rem",
            cursor: "pointer",
          }}
          onClick={() => setToggle(!toggle)}
        />
      </SidebarStylehead>
      <LinksStyle>
        <ul>
          {links
            .filter((id) => id.id === 1)
            .map((item) => {
              return (
                <li key={item.id} onClick={() => setToggle(!toggle)}>
                  <Link
                    style={{
                      color: "#49A6E9",
                      fontSize: "1.5rem",
                    }}
                    to={item.url}
                  >
                    {item.icon}
                    <span> </span>
                    {item.text}
                  </Link>
                </li>
              );
            })}
          {links
            .filter((id) => id.id !== 1)
            .map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    style={{
                      color: "#49A6E9",
                      fontSize: "1.5rem",
                    }}
                    to={link.url}
                  >
                    {link.icon}
                    <span> </span>
                    {link.text}
                  </Link>
                </li>
              );
            })}
        </ul>
      </LinksStyle>
      <SocialStyle>
        {social.map((icon) => {
          return (
            <a key={icon.id} href={icon.url}>
              {icon.icon}
            </a>
          );
        })}
      </SocialStyle>
    </Sidebardadstyle>
  );
};

export default Sidebar;
