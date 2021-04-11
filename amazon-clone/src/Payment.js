import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  //   const [processing, setProcessing] = useState("");
  //   const [success, setSuccess] = useState(false);
  //   const [clientSecret, setClientSecret] = useState(true);

  //   useEffect(() => {
  //     // generate stripe secret that allows us to charge a customer
  //     const getClientSecret = async () => {
  //       const response = await axios({
  //         method: "post",
  //         url: `/payments/create?total=${getBasketTotal(basket) * 100}`, // Stripe expects the currency in sub-units
  //       });
  //       setClientSecret(response.data.clientSecret);
  //     };

  //     getClientSecret();
  //   }, [basket]);

  //   console.log("The secret key is >>> ", clientSecret);

  const handleSubmit = async (e) => {
    // do all the fancy stripe stuff
    e.preventDefault();
    // setProcessing(true);
    // setSuccess(true);
    // setProcessing(false);
    // setError(null);

    dispatch({
      type: "EMPTY_BASKET",
    });

    history.replace("/orders");

    // const payload = await stripe
    //   .confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: elements.getElement(CardElement),
    //     },
    //   })
    //   .then(({ paymentIntent }) => {
    //     setSuccess(true);
    //     setProcessing(false);
    //     setError(null);

    //     dispatch({
    //       type: "EMPTY_BASKET",
    //     });

    //     history.replace("/orders");
    //   });
  };

  const handleChange = (event) => {
    // listen for any changes in the CardElement
    // and display and errors as the customer types in the card details

    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          {/* payment section - delivery address */}
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Ahmedabad, Gujarat</p>
          </div>
        </div>

        <div className="payment__section">
          {/* payment section - reviewing items */}
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          {/* payment section - payment details */}
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">
            {/* stripe functionalities */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total : {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button /*disabled={processing || disabled || success}*/>
                  <span>
                    {/* processing ? <p> Processing </p> : "Buy Now" */}Buy Now
                  </span>
                </button>
              </div>

              {/* Errors */}

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
