import React from 'react'
import './card.css'

const Card = props => (
  <a href={props.link}>
    <div className="main__card" style={{backgroundImage: "url(" + props.image +")"}}>
        <span className="main__card--tag">{props.tag}</span>
        <h3>{props.title}</h3>
    </div>
  </a>
)

export default Card
