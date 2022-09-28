import React from "react";
import Wrapper from "../../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "../Logo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar, clearStore } from "../../features/user/userSlice";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft></FaAlignLeft>
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div
          className="btn-container"
          onClick={() => setShowLogout(!showLogout)}
        >
          <button type="button" className="btn">
            <FaUserCircle />
            User
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              className="dropdown-btn"
              onClick={() => dispatch(clearStore("Successfully logout"))}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
