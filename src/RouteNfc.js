import React from 'react';
import NfcHome from './Components/NfcHome';
import Form_LR from './Components/Form_LR';
import DashBoard from './Components/Dash/DashBoard';
import Vcard from './Components/Dash/Vcard';
import SideBar from './Components/Dash/SideBar';
import DashRoutes from './Components/Dash/DashRoutes';
import ForgotPassword from './Components/ForgotPassword';


const RouteNfc = 
[
  {
    path:"/",
    name:"Home", 
    element:<NfcHome/>
  },
  {
    path:"/form",
    name:"form",
    element:<Form_LR/>
  },
  {
    path:"/ForgotPassword",
    name:"ForgotPassword",
    element:<ForgotPassword/>
  },

  // sidebar
  {
    path:"/sidebar",
    name:"sidebar",
    element:<SideBar/>
  }
]
export default RouteNfc
