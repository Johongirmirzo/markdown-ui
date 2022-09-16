import React, { useState, useContext } from "react";
import {
  NavbarHeader,
  NavLeftSide,
  Hamburger,
  HamburgerLine,
  NavTitle,
  NavMarkdownInputBox,
  NavRightSide,
  NavButton,
  NavLogoutButton,
  NavCreateMarkdownButton,
} from "./Navbar.styled";
import { AiOutlineFile } from "react-icons/ai";
import { FaRegSave } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { AuthContext } from "../../context/AuthContext";
import { logoutUser } from "../../api/user";

interface MarkdownDataInterface {
  _id: string;
  user: string;
  markdown: string;
  markdownName: string;
}

type NavbarProps = {
  isCreatingMarkdown: boolean;
  markdownName: string;
  isSidebarOpen: boolean;
  saveMarkdown: (markdownId?: string) => void;
  getMarkdownName: (markdownName: string) => void;
  getIsCreatingMarkdownValue: (val: boolean) => void;
  toggleSidebar: () => void;
  deleteMarkdown: () => void;
  editingMarkdown: MarkdownDataInterface;
};

const Navbar = ({
  saveMarkdown,
  getMarkdownName,
  getIsCreatingMarkdownValue,
  toggleSidebar,
  deleteMarkdown,
  editingMarkdown,
  isSidebarOpen,
  isCreatingMarkdown,
  markdownName,
}: NavbarProps) => {
  const { removeUser } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (markdownName.trim().length >= 0 && markdownName.trim().length <= 25) {
      getMarkdownName(e.target.value);
    }
  };
  const handleClick = () => {
    if (markdownName.trim().length < 1) {
      alert("Markdown Name can't be empty");
    } else {
      saveMarkdown(editingMarkdown?._id);
    }
  };

  const handleLogoutClick = () => {
    (async function () {
      try {
        await logoutUser();
        removeUser();
      } catch (err) {
        console.error(err);
      }
    })();
  };
  const handleMarkdownDeleteClick = () => {
    const answer = window.confirm(
      "Are you sure that you want to exit current markdown?"
    );
    if (answer === true) {
      deleteMarkdown();
    }
  };

  console.log({ markdownName });
  return (
    <NavbarHeader isSidebarOpen={isSidebarOpen}>
      <NavLeftSide>
        <Hamburger
          onClick={toggleSidebar}
          className={isSidebarOpen ? "active" : ""}
        >
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </Hamburger>
        <NavTitle>Markdown</NavTitle>
        {isCreatingMarkdown && (
          <NavMarkdownInputBox>
            <AiOutlineFile style={{ color: "#fff", fontSize: "25px" }} />
            <div>
              <p>Markdown Name</p>
              <input
                onChange={handleChange}
                value={markdownName}
                type="text"
                placeholder="Type Markdown Name"
              />
            </div>
          </NavMarkdownInputBox>
        )}
      </NavLeftSide>
      <NavRightSide>
        {isCreatingMarkdown ? (
          <>
            <ImExit
              onClick={handleMarkdownDeleteClick}
              style={{ color: "#888", cursor: "pointer", fontSize: "20px" }}
            />
            <NavButton onClick={handleClick}>
              <FaRegSave style={{ fontSize: "20px" }} />
              Save Changes
            </NavButton>
            <NavLogoutButton>Logout</NavLogoutButton>
          </>
        ) : (
          <>
            <NavCreateMarkdownButton
              onClick={() => getIsCreatingMarkdownValue(true)}
            >
              Create Markdown
            </NavCreateMarkdownButton>
            <NavLogoutButton onClick={handleLogoutClick}>
              Logout
            </NavLogoutButton>
          </>
        )}
      </NavRightSide>
    </NavbarHeader>
  );
};

export default Navbar;
