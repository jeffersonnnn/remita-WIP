import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from "./search-bar.module.css"
import styled from "styled-components"


const Label = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const SearchBar = (props) => {
    const [text, setText] = React.useState("")
    const [focused, setFocused] = React.useState(false)

    return (
        // <div className="inputWithIcon">
        //     <span class="fa fa-user fa-lg fa-fw" aria-hidden="true"><FaSearch/></span>
        //     <input type="text" placeholder="Your name" />
        //  </div>

        <div className="container">
            <span className="icon-shift">
                <FaSearch />
            </span>
            <input
                id="search"
                type="text"
                value={props.value}
                autoFocus
                onChange={(event) => setText(event.target.value)}
                placeholder={props.placeholder}
                autoComplete="off"
                className={styles.input}
            />
        </div>
    )
}

export default SearchBar;