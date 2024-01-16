import Card from "../card/Card";
import "./cards.scss";

function Cards({ products }) {
  return (
    <ul className="cards">
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default Cards;
