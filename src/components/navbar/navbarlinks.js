import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Search from "../search"
import { FaLock, FaPlus } from 'react-icons/fa';
import ButtonImage from "../button-image";


const NavItem = styled(Link)`
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  @media (max-width: 768px) {
    padding: 20px 40px;
    font-size: 1.5rem;
    margin: 10px 0;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <Search placeholder="Search Here" />
      <NavItem className="navlink" to="/">Documentation</NavItem>
      <NavItem className="navlink" to="/helpdesk">Help Desk</NavItem>
      {/* <NavItem className="navbutton" target="_blank" to="https://www.remita.net/signin" rel="noopener noreferrer"><span className="nav-icon-shift"><FaPlus/>{"  "}</span>Login</NavItem> */}
      <ButtonImage title="Login" href="https://www.remita.net/signin" icon={<FaPlus />}/>
      <ButtonImage title="Signup" href="https://login.remita.net/remita/registration/signup.spa" icon={<FaLock />}/>
    </>
  )
}

export default NavbarLinks

