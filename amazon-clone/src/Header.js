import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://alltimetrends.com/wp-content/uploads/2020/05/Amazon-logo.png"
          alt="Amazon logo didn't load"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__navOptions">
            <span className="header__navOptionOne">Hello Guest</span>
            <span className="header__navOptionTwo">Sign In</span>
          </div>
        </Link>
        <div className="header__navOptions">
          <span className="header__navOptionOne">Returns</span>
          <span className="header__navOptionTwo">& Orders</span>
        </div>
        <div className="header__navOptions">
          <span className="header__navOptionOne">Your</span>
          <span className="header__navOptionTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__shoppingCart">
            <ShoppingCartIcon className="header__shoppingCartIcon" />
            <span className="header__shoppingCartCount header__navOptionTwo">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
