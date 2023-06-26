export const Pizza = ({ ingredients, name, photoName, price, soldOut }) => {
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div className="pizza">
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
};
