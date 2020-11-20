import React, { useState, useEffect, createRef } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import routes from "../components/routes";

const SubMenuContainer = styled.ul`
  min-width: 5rem;
  transition: all 0.5s ease;
  margin-top: 1rem;
  margin-left: 6%;
  margin-top: 4%;
	left: 0;
  display: ${props => props.displaySubMenu ? "block" : "none"};
  list-style: none;

  & li {
  background-color: transparent;
	clear: both;
  width: 100%;
}

.child-ul {
  margin-left: 23%;
  margin-top: 4%;
  padding: 0%
}
`

const SidebarContainer = styled.div`
.parent-ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  padding: 12px 0px;
	padding: 1rem;
	position: relative;
	text-decoration: none;
  transition-duration: 0.5s;
}
li:hover {
  background-color: #ECEFF1;
  cursor: pointer;
}

.link-style {
  color: #000000;
  display: block;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
}
.link-style:hover {
  color: #F16521;
}
.active {
  color: #F16521;
}
.logo-sizing{
  width: 19px;
  height: 19px;
}
.logo-sizing:active {
  background-color: #ECEFF1;
}
nav {
  border-right: 2px solid #eee;
}
.d-flex_ap {
  padding-top: 11px;
}
.d-flex_ls{
  padding-top: 18px;
}
`

// Make the sidebar dynamically generated from a markdown file

const Sidebar = () => {

  const [subMenuId, setSubMenuId] = useState(''); 
  const paymentRef = createRef()


  useEffect(() => {
    clickEvent()
  }, [window.location.pathname])

  const clickEvent = () => {
    console.log(window.location.pathname.includes(subMenuId), 'line')
    if (window.location.pathname.includes(subMenuId)) {
      return setSubMenuId(window.location.pathname)     
    }
    return setSubMenuId('')
  }

  const innerMenuClick = (e) => {
    if(paymentRef.current.contains(e.target)) {
      console.log(paymentRef.current.contains(e.target), 'pulse');
      return setSubMenuId(subMenuId)
    }
    return setSubMenuId("")
  }

  return (
    <SidebarContainer>
      <nav>
        <ul className="parent-ul">
          {routes.map((value, key) => {
            return(
              <li key={key} id={value.path} onClick={(e) => {
                let testVar = e.currentTarget.parentElement.parentElement.contains(e.target)
                console.log(testVar)
                if ((e.currentTarget.id === subMenuId)) {
                  if (testVar) {
                    console.log('logging anything');
                    return;
                  } else {
                    return setSubMenuId('')
                  }
                }
                setSubMenuId(e.currentTarget.id)
              }}>
                <div className="d-flex parent-li">
                  <span className="col-3 d-flex_ap logo-sizing">{value.icon}</span>
                  <Link className="col-9 pl-0 pt-2 link-style" activeClassName="active" to={value.path}>{value.name}</Link>
                </div>
                {value.subMenu && value.subMenu.length > 0 ? (
                  <SubMenuContainer displaySubMenu={subMenuId === (value.path)} aria-label="submenu">
                    {value.subMenu.map((subLink) => (
                      <li key={subLink.name}>
                        <Link to={subLink.link}>{subLink.name}</Link> 
                      </li>
                    ))}
                  </SubMenuContainer>
                ) : null}
              </li>
            )
          })}
        </ul>
      </nav>
  </SidebarContainer>
  )  
}
export default Sidebar