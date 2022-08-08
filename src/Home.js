import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="/images/aamazon.jpg" />

        <div className="home__row">
          <Product
            id="123123123"
            title="Amazon Speaker"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="234565432"
            title="Kenwood"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="56789087654"
            title="Kenwood"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="6543456787654"
            title="Kenwood"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="654567"
            title="Kenwood"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
        </div>

        <div className="home__row">
        <Product
          id="8765434567"
          title="Kenwood"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
