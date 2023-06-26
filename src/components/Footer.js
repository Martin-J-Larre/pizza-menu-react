import { pizzaData } from "../data";

export const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  const noPizza = pizzaData.length > 0;

  return (
    <footer className="footer">
      {isOpen && noPizza ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or onder online</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're open since {openHour}:00 to {closeHour}:00
        </p>
      )}
    </footer>
  );
};
