import { BsThreeDots } from "react-icons/bs";
import "./card.scss";

function Card({ product }) {
  const { category, price, title } = product;
  return (
    <li className="card">
      <div className="card-parent">
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
