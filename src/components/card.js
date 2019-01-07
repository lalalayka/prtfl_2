import React from 'react'
import './card.css'

const Card = props => (
  <a href={props.link}>
    <div className="main__card">
        <h3>{props.title}</h3>
        <span className="main__card--tag">{props.tag}</span>
        <img src={props.image} />
    </div>
  </a>
)

export default Card
