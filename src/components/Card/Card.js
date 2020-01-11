
import React from "react";
import "./Card.css"

const Card = props => (
    <div className="card img-container hover">
        <img alt={props.name} src={props.image} id={props.id}
          onClick={() => props.randomizeCards(props.id)} className='randomizeCards'/>
    </div>
  );
  
  export default Card;