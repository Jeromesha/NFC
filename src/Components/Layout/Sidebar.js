import React from "react";
import { NavLink } from "react-router-dom";
import { MdAccountBalance, MdHome, MdDashboardCustomize, MdAttachMoney } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import '../Layout/Sidebar.css';
import { FaCommentAlt, FaGraduationCap, FaRegChartBar, FaShoppingBag, FaTh, FaThList, FaUserAlt } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import {
  BsPersonBoundingBox,
  BsFillPersonPlusFill,
  BsCardList,
} from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { AiOutlinePullRequest, AiFillStar } from "react-icons/ai";
import { MdInventory } from "react-icons/md"
import { Menu } from "antd";
import { IoSettingsOutline } from "react-icons/io5";

const { SubMenu } = Menu;

function Sidebar({ collapsed }) {
  const onClick = (e) => {
    console.log("click -------------", e);
  };
  return (

    <div className={collapsed === true ? "sidebarcontent open" : "d-none"}>
      <Menu onClick={onClick} mode="inline" className="nav-list">
        <NavLink to="dash" activeClassName="main-nav-style">
          <FaTh className="Nav-Icon" />
          Dashboard
        </NavLink>
        <hr />
        <SubMenu
          icon={<FaUserAlt size={20} className="Nav-Icon1" />}
          title="V_Card"
        >
          <NavLink to="businesstemp">
            <BsFillPersonPlusFill className="Nav-Icon" />
            Business Card
          </NavLink>
          <NavLink to="enquiries">
            <MdInventory className="Nav-Icon" />
            Resume
          </NavLink>
        </SubMenu>
        <hr />
        <NavLink to="enquiries">
            <FaRegChartBar className="Nav-Icon" />
            Enquiries
          </NavLink>
          <NavLink to="dashAppointments">
            <FaShoppingBag className="Nav-Icon" />
            Appointments
          </NavLink>
          <NavLink to="backGround">
            <FaThList className="Nav-Icon" />
            Backgrounds
          </NavLink>
          <NavLink to="affiliations">
            <MdAttachMoney className="Nav-Icon" />
            Affiliations
          </NavLink>
          <NavLink to="setting">
            <IoSettingsOutline className="Nav-Icon" />
            Setting
          </NavLink>
        <hr />
      </Menu>
    </div>
  );
}
export default Sidebar;
