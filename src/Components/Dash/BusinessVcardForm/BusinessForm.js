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
import TemplateBox from "../VcardPages/TemplateBox";

export default function BusinessForm() {
  const [hotelSet, setHotelSet] = useState("cardDetial");
  return (
    <div className="Hotel_container">
      <section className="Hotel_head">
        <div class="sliding-list list01">
          <NavLink
            className={`vcard_dash_nav ${
              hotelSet === "cardDetial" ? "active" : ""
            }`}
            onClick={() => setHotelSet("cardDetial")}
          >
            VcardDetial
          </NavLink>
          <NavLink
            className={`vcard_dash_nav ${
              hotelSet === "TemplateBox" ? "active" : ""
            }`}
            onClick={() => setHotelSet("TemplateBox")}
          >
            Template
          </NavLink>
          <NavLink
            className={`vcard_dash_nav ${
              hotelSet === "businesshours" ? "active" : ""
            }`}
            onClick={() => setHotelSet("businesshours")}
          >
            Business Hours
          </NavLink>
          <NavLink
            className={`vcard_dash_nav ${hotelSet === "qr" ? "active" : ""}`}
            onClick={() => setHotelSet("qr")}
          >
            Customize QR Code
          </NavLink>
          <NavLink
            className={`vcard_dash_nav ${
              hotelSet === "Service" ? "active" : ""
            }`}
            onClick={() => setHotelSet("Service")}
          >
            Service
          </NavLink>
          <NavLink
            className={`vcard_dash_nav ${
              hotelSet === "product" ? "active" : ""
            }`}
            onClick={() => setHotelSet("product")}
          >
            Product
          </NavLink>
          <NavLink
            className={`vcard_dash_nav ${
              hotelSet === "testimonials" ? "active" : ""
            }`}
            onClick={() => setHotelSet("testimonials")}
          >
            Testimonials
          </NavLink>
          <NavLink
            className={`vcard_dash_nav ${
              hotelSet === "appointments" ? "active" : ""
            }`}
            onClick={() => setHotelSet("appointments")}
          >
            Appointments
          </NavLink>
          <NavLink
            className={`vcard_dash_nav ${
              hotelSet === "socialmedialink" ? "active" : ""
            }`}
            onClick={() => setHotelSet("socialmedialink")}
          >
            SocialMedia
          </NavLink>
        </div>
      </section>
      <div style={{ padding: "4%" }}>
        {hotelSet === "cardDetial" && <VcardDetial />}
        {hotelSet === "TemplateBox" && <TemplateBox />}
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
