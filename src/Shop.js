import React, { useState } from "react";
import Cards from "./component/card";

const list = [
  {
    id: "1",
    name: "NEZUKO KAMADO",
    from: "Demon Slayer",
    price: 25,
    image:
      "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/b62a290a4cf34cc2a8e2327c4f5579bc_Large.jpg",
  },
  {
    id: "2",
    name: "TANJIRO KAMADO",
    from: "Demon Slayer",
    price: 25,
    image:
      "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/b62a290a4cf34cc2a8e2327c4f5579bc_Large.jpg",
  },
  {
    id: "3",
    name: "MUZAN KIBUTSUJI",
    from: "Demon Slayer",
    price: 25,
    image:
      "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/b62a290a4cf34cc2a8e2327c4f5579bc_Large.jpg",
  },
  {
    id: "4",
    name: "INOSUKE HASHIBIRA",
    from: "Demon Slayer",
    price: 25,
    image:
      "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/b62a290a4cf34cc2a8e2327c4f5579bc_Large.jpg",
  },
  {
    id: "5",
    name: "AGATSUMA ZENITSU",
    from: "Demon Slayer",
    price: 25,
    image:
      "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/b62a290a4cf34cc2a8e2327c4f5579bc_Large.jpg",
  },
  {
    id: "6",
    name: "TOMIOKA GIYU",
    from: "Demon Slayer",
    price: 25,
    image:
      "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/b62a290a4cf34cc2a8e2327c4f5579bc_Large.jpg",
  },
];

function Shop() {
  function handleClick(props) {
    const cardItems = {
      id: props.id,
      name: props.name,
      from: props.from,
      price: props.price,
      image: props.image,
    };
    props.onDataUpdate(cardItems);
  }
  return (
    <div className="shop">
      {list.map((item) => (
        <div className="card">
          <div className="image-box">
            <img src={item.image} />
          </div>
          <div className="details">
            <p>{item.name}</p>
            <p>{item.from}</p>
            <p>{item.price}</p>
            <button onClick={() => handleClick(item)}>add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
