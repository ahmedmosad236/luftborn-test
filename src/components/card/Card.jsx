import { BsThreeDots } from "react-icons/bs";
import "./card.scss";

function Card({ product }) {
  const { category, price, title, rating } = product;
  const { rate } = rating;
  const getRatingClass = () => {
    if (rate >= 4.5) {
      return "red";
    } else if (rate >= 3.5 && rate < 4.5) {
      return "green";
    } else if (rate >= 2.5 && rate < 3.5) {
      return "blue";
    } else if (rate >= 1.5 && rate < 2.5) {
      return "orange";
    } else {
      return "yellow";
    }
  };
  const ratingClass = getRatingClass();
  return (
    <li className="card">
      <div className={`card-parent ${ratingClass}`}>
        <div className="card-child">
          <div className="card-head">
            <p className="card-category">{category}</p>
            <span>
              <BsThreeDots className="card-dots" />
            </span>
          </div>
          <div className="card-hide-store">
            <p className="card-price">{price}$</p>
            <div className="card-title-store">
              <p className="card-title">{title}</p>
              <div className="card-store">
                <p>InStore</p>
                <p>120</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
