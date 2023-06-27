import { Pizza } from "./";
import { pizzaData } from "../data";

export const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaData.length > 0 ? (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} {...pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p style={{ fontSize: "23px" }}>
          We're still working on our menu. Please came back later 🪄🍕
        </p>
      )}
    </main>
  );
};
