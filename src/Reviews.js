import React from "react";
import "./App.css";

function Reviews() {
  // dummy JSON
  const users = [
    {
      id: 1,
      name: "Betty",
      review: "Harganya murah tapi gapapa",
      img:
        "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 2,
      name: "Zahra",
      review: "Harganya mahal ",
      img:
        "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      name: "Rika",
      review: "Kualitas Premium",
      img:
        "https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  const listReview = users.map((itemReview) => (
    <div key={itemReview.id} className="Item">
      <img src={itemReview.img} alt="" />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  ));
  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

export default Reviews;
