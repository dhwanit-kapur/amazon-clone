import React from "react";
import "./Home.css";
import { v4 } from "uuid";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg"
          alt="Home backdrop"
        />
        <div className="home__row">
          <Product
            id={v4()}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
            price={12.29}
            rating={4}
            imgURL="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          />
          <Product
            id={v4()}
            title="Acer Nitro 5 Gaming Laptop, 10th Gen Intel Core i5-10300H,NVIDIA GeForce GTX 1650 Ti, 15.6 Full HD IPS 144Hz Display, 8GB DDR4,256GB NVMe SSD,WiFi 6, DTS X Ultra,Backlit Keyboard,AN515-55-59KS"
            price={729.99}
            rating={3}
            imgURL="https://images-na.ssl-images-amazon.com/images/I/81Z8NvO2TFL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={v4()}
            title="Amazon Basics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black"
            price={82.99}
            rating={4}
            imgURL="https://images-na.ssl-images-amazon.com/images/I/71i08qnZeDL._AC_SL1500_.jpg"
          />
          <Product
            id={v4()}
            title="Logitech BRIO Ultra HD Webcam for Video Conferencing, Recording, and Streaming - Black"
            price={199.99}
            rating={3}
            imgURL="https://images-na.ssl-images-amazon.com/images/I/615PHGxiucL._AC_SL1500_.jpg"
          />
          <Product
            id={v4()}
            title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 64 GB"
            price={299.99}
            rating={5}
            imgURL="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={v4()}
            title="Samsung Business CH890 Series 34 inch WQHD 3440x1440 Ultrawide Curved Desktop Monitor for Business, 100 Hz, USB-C, HDMI, DP, 3 Year Warranty (LC34H890WGNXGO), Black/Titanium"
            price={514.99}
            rating={4}
            imgURL="https://images-na.ssl-images-amazon.com/images/I/71qkzkC7bHL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
