import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const Button = styled(Link)`
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
const ButtonImage = (props) => {
  return (
    //   <a className="navbutton" rel="noopener noreferrer" target="_blank"> 
        <Button className="navbutton" to={props.href} target="_blank"> 
            <span className="nav-icon-new">{props.icon}</span>{ props.title } 
        </Button> 
    //   </a>
  )
}

export default ButtonImage;