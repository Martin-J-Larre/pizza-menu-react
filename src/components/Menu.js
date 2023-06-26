import { Pizza } from "./";
import { pizzaData } from "../data";

export const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza key={pizza.name} {...pizza} />
          ))}
        </ul>
      ) : (
        <p style={{ fontSize: "23px" }}>
          We're still working on our menu. Please came back later 🪄🍕
        </p>
      )}
    </main>
  );
};
