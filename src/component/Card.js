import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { RiVipCrownLine } from "react-icons/ri";


function Card(props) {
  return (
    <div className="card-grid">
      <div className="card">
        
        <img src={props.imageUrl} alt="Card image" className="card-image" />
        <div className="card-content">
          <div className="title-container">
          <h2 className="card-title">{props.title}</h2>
          {props.premium && (
            <span className="premium-badge">
            <RiVipCrownLine />
            </span>
          )}
          </div>
          <p className="card-description">
            Harga: <strong>{props.price}K</strong>/Website
          </p>
          <a href="" className="card-button-beli">
            <FaShoppingCart />
            Beli
          </a>
          <a
            href={props.previewUrl}
            className="card-button-preview"
            target="_blank"
          >
            <FaEarthAmericas />
            Preview
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
