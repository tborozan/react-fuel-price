import React from "react";

const Price = (props) => {
  return (
    <div className="price">
      <div>{props.name}</div>
      <div>{props.price}</div>
    </div>
  );
};

export default Price;
