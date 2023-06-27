import React from "react";

export const Order = ({ closeHour }) => {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or onder online</p>
      <button className="btn">Order</button>
    </div>
  );
};
