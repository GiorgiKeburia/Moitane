import logo from "../../assets/img/card/logo.png";
import star from "../../assets/icons/star.png";

import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-top">
        <img src={props.imgUrl} />
      </div>
      <div className="card-bottom">
        <img className="logo" src={logo} />
        <div className="info">
          <div className="card-bottom--left">{props.name}</div>
          <div className="info-bottom">
            <div className="card-bottom--right">
              {!props.shopIsOpen ? (
                <span className="closed">დაკეტილია</span>
              ) : (
                <span className="open"> ღიაა</span>
              )}{" "}
              • 3.5 ₾
            </div>
            <div className="card-bottom--star">
              <img src={star} />
              {props.rating}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
