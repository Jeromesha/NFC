import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const SideBar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh style={{padding:"2%"}}/>,
        },
        {
            path:"/vcard",
            name:"V_Card",
            icon:<FaUserAlt style={{padding:"2%"}}/>,
        },
        {
            path:"/enquiries",
            name:"Enquiries",
            icon:<FaRegChartBar style={{padding:"2%"}}/>
        },
        {
            path:"/product",
            name:"Appointments",
            icon:<FaShoppingBag style={{padding:"2%"}}/>
        },
        {
            path:"/productList",
            name:"Virtual Backgrounds",
            icon:<FaThList style={{padding:"2%"}}/>
        },
        {
            path:"/productList",
            name:"Virtual Backgrounds",
            icon:<FaThList style={{padding:"2%"}}/>
        },
        {
            path:"/comment",
            name:"Affiliations",
            icon:<FaCommentAlt style={{padding:"2%"}}/>
        },
    ]
    const [buttonClicked, setButtonClicked] = useState(false);
    const handelClick = () => {
        setButtonClicked(true);
    }
    return (
        <div className="sidebar_container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar_div">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="sidebar_logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="sidebar_bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink 
                       to={item.path} 
                       key={index} 
                       className="sidebar_link" 
                       activeclassName="sidebar_active"
                       onClick={handelClick}
                       >
                           <div className="sidebar_icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="sidebar_link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default SideBar;
