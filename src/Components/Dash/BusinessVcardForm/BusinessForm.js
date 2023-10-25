import { Space, Table, Tag } from 'antd';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import VcardDetial from '../VcardPages/VcardDetial';
import QrCode from '../VcardPages/QrCode';
import SocialMediaLinks from '../VcardPages/SocialMediaLinks';
import { NavLink } from 'react-bootstrap';
import BusinessHours from '../VcardPages/BusinessHours';

export default function BusinessForm() {
    const [hotelSet, setHotelSet] = useState('cardDetial');
    return (
        <div className='Hotel_container'>
        <div className='Hotel_head'>
          <nav className="">
            <NavLink className="vcard_dash_nav" onClick={()=> setHotelSet('cardDetial')}>
            VcardDetial
            </NavLink>
            <NavLink className="vcard_dash_nav" onClick={()=> setHotelSet('Menu')}>
              Menu
            </NavLink>
            <NavLink className="vcard_dash_nav" onClick={()=> setHotelSet('qr')}>
              QR-Code
            </NavLink>
            <NavLink className="vcard_dash_nav" onClick={()=> setHotelSet('Menu')}>
              Timing
            </NavLink>
            <NavLink className="vcard_dash_nav" onClick={()=> setHotelSet('socialmedia')}>
              Timing
            </NavLink>
            <NavLink className="vcard_dash_nav" onClick={()=> setHotelSet('businesshours')}>
                Businesshours
            </NavLink>
          </nav>
        </div>
        <div>
          {hotelSet === 'cardDetial' && <VcardDetial/>}
          {hotelSet === 'qr' && <QrCode/>}
          {hotelSet === 'socialmedia' && <SocialMediaLinks/>}
          {hotelSet === 'businesshours' && <BusinessHours/>}
        </div>
      </div>
    );
}
