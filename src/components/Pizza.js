export const Pizza = ({ ingredients, name, photoName, price, soldOut }) => {
  return (
    <li className={soldOut ? "pizza sold-out" : "pizza"}>
      <img src={photoName} alt={name} />
      <div className="pizza">
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
};
