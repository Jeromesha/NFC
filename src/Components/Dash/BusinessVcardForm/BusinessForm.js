import { Space, Table, Tag } from "antd";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import VcardDetial from "../VcardPages/VcardDetial";
import QrCode from "../VcardPages/QrCode";
import SocialMediaLinks from "../VcardPages/SocialMediaLinks";
import { NavLink } from "react-bootstrap";
import BusinessHours from "../VcardPages/BusinessHours";
import Service from "../VcardPages/Service";
import Product from "../VcardPages/Product";
import Testimonials from "../VcardPages/Testimonials";
import Appointments from "../VcardPages/Appointments";

export default function BusinessForm() {
  const [hotelSet, setHotelSet] = useState("cardDetial");
  return (
    <div className="Hotel_container">
      <section className="Hotel_head">
          <NavLink
            className="vcard_dash_nav"
            onClick={() => setHotelSet("cardDetial")}
          >
            VcardDetial
          </NavLink>
          <NavLink className="vcard_dash_nav" onClick={() => setHotelSet("")}>
            Template
          </NavLink>
          <NavLink
            className="vcard_dash_nav"
            onClick={() => setHotelSet("businesshours")}
          >
            Business Hours
          </NavLink>
          <NavLink className="vcard_dash_nav" onClick={() => setHotelSet("qr")}>
            Customize QR Code
          </NavLink>
          <NavLink
            className="vcard_dash_nav"
            onClick={() => setHotelSet("Service")}
          >
            Service
          </NavLink>
          <NavLink
            className="vcard_dash_nav"
            onClick={() => setHotelSet("product")}
          >
            Product
          </NavLink>
          <NavLink
            className="vcard_dash_nav"
            onClick={() => setHotelSet("testimonials")}
          >
            Testimonials
          </NavLink>
          <NavLink
            className="vcard_dash_nav"
            onClick={() => setHotelSet("appointments")}
          >
            Appointments
          </NavLink>
          <NavLink
            className="vcard_dash_nav"
            onClick={() => setHotelSet("socialmedialink")}
          >
            SocialMedia
          </NavLink>
      </section>
      <div>
        {hotelSet === "cardDetial" && <VcardDetial />}
        {hotelSet === "qr" && <QrCode />}
        {hotelSet === "socialmedia" && <SocialMediaLinks />}
        {hotelSet === "businesshours" && <BusinessHours />}
        {hotelSet === "Service" && <Service />}
        {hotelSet === "product" && <Product />}
        {hotelSet === "testimonials" && <Testimonials />}
        {hotelSet === "appointments" && <Appointments />}
        {hotelSet === "socialmedialink" && <SocialMediaLinks />}
      </div>
    </div>
  );
}
