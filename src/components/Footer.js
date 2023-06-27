import { pizzaData } from "../data";
import { Order } from "./Order";

export const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  const noPizza = pizzaData.length > 0;

  if (!isOpen)
    return (
      <footer className="footer">
        <p>
          We're close You're welcome to visit us since {openHour}:00 to{" "}
          {closeHour}:00
        </p>
      </footer>
    );

  return (
    <footer className="footer">
      {isOpen && noPizza ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>We'll be open soon</p>
      )}
    </footer>
  );
};
