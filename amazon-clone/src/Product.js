import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, price, rating, imgURL }) => {
  const [{ basket }, dispatch] = useStateValue();

  // console.log("Item selected >>>> ", basket);

  const addToBasket = () => {
    // dispatch the selected item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: imgURL,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={imgURL} alt="Product img not loaded" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
