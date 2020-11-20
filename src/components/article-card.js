import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
// import { FaLock, FaPlus } from 'react-icons/fa';
// import { propTypes } from "react-bootstrap/esm/Image";

// background: #fff;
//     box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
//     border-radius: 18.4px; 
//     margin-bottom: 20px;

const CardItem = styled.div`
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
    margin-bottom: 15px;
`
const ArticleCard = (props) => {
  return (
      <CardItem>

    <div className="card mb-3 border-0">
    <div className="row">
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title bold-text">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
      <div className="col-md-4 text-center">
        <p className="card-text mt-3"><small className="text-muted">{props.time}</small></p>
      </div>
    </div>
  </div>
    </CardItem>

  )
}

export default ArticleCard

