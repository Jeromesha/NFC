import React, { useState } from 'react'
import VcardDetial from './VcardDetial'
import { Link, NavLink } from 'react-router-dom'
import Portfolio from './Portfolio';
import Menu from './Menu';
import SocialMediaLinks from './SocialMediaLinks';
import QrCode from './QrCode';

export default function Hotel() {
  const [hotelSet, setHotelSet] = useState('cardDetial');
  return (
    <div className='Hotel_container'>
      <div className='Hotel_head'>
        <nav className="">
          <NavLink className="vcard_dash_nav"  activeClassName="active" onClick={()=> setHotelSet('cardDetial')}>
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
        </nav>
      </div>
      <div>
        {hotelSet === 'cardDetial' && <VcardDetial/>}
        {hotelSet === 'Menu' && <Menu/>}
        {hotelSet === 'qr' && <QrCode/>}
        {hotelSet === 'socialmedia' && <SocialMediaLinks/>}
      </div>
    </div>
  )
}
