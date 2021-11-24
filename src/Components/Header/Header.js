import classes from "./Header.module.css";
import logo from "../../../src/assets/img/Logo/logo.png";
import location from "../../../src/assets/img/Logo/location.png";
import heart from "../../../src/assets/img/Logo/heart.png";
import cart from "../../../src/assets/img/Logo/cart.png";
import person from "../../../src/assets/img/Logo/person.png";

const Header = () => {
  return (
    <div className={classes.HeaderMain}>
      <div className={classes.header}>
        <div className={classes["left-content"]}>
          <img className={classes.logo} src={logo} alt="logo" />
          <h1>moitane</h1>
        </div>
        <div className={classes["right-content"]}>
          <div className={classes["right-left"]}>
            <img className={classes.location} src={location} />
            <h1>მისამართის დამატება</h1>
          </div>
          <div className={classes.list}>
            <ul>
              <li>
                <img className={classes.icons} src={heart} />
              </li>
              <li>
                <img className={classes.icons} src={cart} />
              </li>
              <li>
                <img className={classes.icons} src={person} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
