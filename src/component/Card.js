import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { RiVipCrownLine } from "react-icons/ri";


function Card(props) {
  const url = `https://api.whatsapp.com/send?phone=6287879995866&text=Halo%2C%20saya%20ingin%20memesan%20undangan%20web%20dari%20%2AHi-Nvite%2A%20dengan%20tema%20${props.title}.%20Bisakah%20saya%20mendapatkan%20informasi%20lebih%20lanjut%20tentang%20layanan%20yang%20Anda%20tawarkan%3F%20Terima%20kasih.`;
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
          <a href={url} target="_blank" className="card-button-beli">
            <FaShoppingCart className="card-button-icon" />
            Beli
          </a>
          <a
            href={props.previewUrl}
            className="card-button-preview"
            target="_blank"
          >
            <FaEarthAmericas className="card-button-icon" />
            Preview
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
