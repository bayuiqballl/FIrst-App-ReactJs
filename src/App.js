import React from "react";
import "./App.css";
import Reviews from "./Reviews.js";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="Parentbox">
      <ProdukInfo isDiscount="yes" name="Pinky Swagg" category="Sepatu" />
      <FotoProduk />
      <Reviews />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount, discount } = props;
  if (isDiscount === "yes") {
    return <p>Diskon {discount}% Off</p>;
  } else if (isDiscount === "coming") {
    return <p>Coming soon</p>;
  } else {
    return <p>Belum ada diskon</p>;
  }
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="bwasneaker.jpg" alt="" width="200px" />
    </div>
  );
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = [
    "Tidak kusut terkena air",
    "Bahan lebih halus",
    "Tidak gerah",
  ];
  const listBenefits = benefits.map((itemBenefit) => (
    <li key={itemBenefit}>{itemBenefit}</li>
  ));
  const price = 740000000;

  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Prince">Rp. {price}</p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
        <p className="Info">
          Sepatu X Multifungsi terbuat dari bahan taslan yang tahan air dan
          tidak mudah ditembus angin. Cocok bagi Anda yang banyak beraktivitas
          di luar ruangan atau pengendara motor.
        </p>
        <ul>{listBenefits}</ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">
          Add to chart
        </a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  return console.log(`Membeli ${e}`);
}

CheckDiscount.protoTypes = {
  discount: PropTypes.number.isRequired,
};

export default App;
