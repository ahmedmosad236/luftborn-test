import "./personRectangle.scss";
import image from "./Bitmap.png";
function PersonRectangle() {
  return (
    <div className="person-rec">
      <div className="person">
        <img src={image} alt="Bitmap-img" className="person-img" />
        <div className="sub-head">
          <p className="sub-title">Report for</p>
          <h2 className="heading">Best Sales</h2>
        </div>
      </div>
      <ul className="date">
        <li className="date-item">Daily</li>
        <li className="date-item">Weekly</li>
        <li className="date-item">Monthly</li>
      </ul>
    </div>
  );
}

export default PersonRectangle;
