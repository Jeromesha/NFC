import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "../../Components/nfc.css";
import Hotel from '../Dash/VcardPages/Hotel'
import Business from "./VcardPages/Business";
import Portfolio from "./VcardPages/Portfolio";
export default function Vcard() {
  const [routingPath, setRoutingPath] = useState('Hotel');
  return (
    <div>
      {/* <Header SectionName="V-Card" /> */}
      <div className="vcard_dash_div">
        <nav className="">
          <Link onClick={()=> setRoutingPath('Hotel')} className="vcard_dash_nav">
            Menu
          </Link>
          <Link onClick={()=> setRoutingPath('Resume')} className="vcard_dash_nav">
            Resume / Portfolio
          </Link>
          <Link  onClick={()=> setRoutingPath('Business')} className="vcard_dash_nav">
            BusinessCard
          </Link>
        </nav>  
        <div style={{padding:"2%"}}>
          {routingPath === 'Hotel' && <Hotel/>}
          {routingPath === 'Business' && <Business/>}
          {routingPath === 'Resume' && <Portfolio/>}
        </div>
      </div>
    </div>
  );
}
  