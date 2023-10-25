import React, { useState } from "react";
import { Layout } from "antd";
import '../Layout/Sidebar.css';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import Sidebar from "./Sidebar";
// import Setting from "../../Setting/Setting";

const { Content } = Layout;

function Index() {
  const [collapsed, setCollapsed] = useState(true);

  const handleChange = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate();
  const UserName = localStorage.getItem("name");
  console.log("UserName", UserName);
  const [logout, setLogout] = React.useState(false);

  return (
    <div>
      <div onChange={handleChange}>
        <div className="dashboards__headerNavs">
          <div className="dashboards__headerNavs--container">
            <div>
              <span
                className="navMenu p-2"
                onClick={() => setCollapsed((prev) => !prev)}
              >
                {collapsed ? <AiOutlineClose /> : <GiHamburgerMenu />}
              </span>
             </div>
            <div>
              {/* <Setting /> */}
              {/* <img
                className="feril_icon"
                // src={Aeronext}
                alt="add"
                onClick={() => navigate("/")}
              /> */}
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h6 style={{marginTop:"7px"}}>Profile</h6>
              <IoNotificationsOutline
                size="35"
                style={{ color: "white", marginLeft: "5%", marginRight: "5%"}}
              />
              <FiSettings
                size="35"
                style={{ color: "white", marginLeft: "5%", marginRight: "5%" }}
              />
              <FiLogOut
                size="35"
                style={{ color: "white", marginLeft: "5%", marginRight: "5%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Sidebar collapsed={collapsed} />
      <div
        className={collapsed === true ? "main-content open" : "main-content"}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Index;
