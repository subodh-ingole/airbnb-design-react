import React from "react";

const Card = ({item}) => {
  
  return (
    <div className="card">
      <img className="card--image" src={item.image} />
      <div className="card--stats">
        <img className="card--star" src="star.png" />
        <span>{item.rating}</span>
        <span className="grays">({item.reviews})</span>
        <span className="grays">{item.state}</span>
      </div>
      <div className="card--info">
        <p>{item.info}</p>
        <p><span className="bold">From ${item.price}</span> / person</p>
      </div>
    </div>
  );
};

export default Card;
