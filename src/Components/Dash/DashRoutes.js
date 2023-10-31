    import React from "react";
    import { Route, Routes } from "react-router-dom";
    import SideBar from "./SideBar";
    import DashBoard from "./DashBoard";
    import Enquiries from "./Enquiries";
    import Vcard from "./Vcard";
import BusinessForm from "./BusinessVcardForm/BusinessForm";
import BusinessTemplate from "./BusinessVcardForm/BusinessTemplate";
import BusinessHours from "./VcardPages/BusinessHours";
import BackGround from "./BackGround";
import DashAffiliations from "./DashAffiliations";
import Setting from "./Setting";
import TemplateBox from "./VcardPages/TemplateBox";
import Appointments from "./VcardPages/Appointments";
import DashAppoinment from "./DashAppoinment";

    const DashRoutes = [
        {
          path: "vcard", // Remove the leading '/'
          name: "vcard",
          element: <Vcard />,
        },
        {
          path: "enquiries", // Remove the leading '/'
          name: "enquiries",
          element: <Enquiries />,
        },
        {
          path: "dashAppointments", // Remove the leading '/'
          name: "dashAppointments",
          element: <DashAppoinment />,
        },
        {
          path: "dash", // Remove the leading '/'
          name: "dash",
          element: <DashBoard />,
        },
        {
          path: "/businessform", // Remove the leading '/'
          name: "BusinessCard",
          element:<BusinessForm/>
        },
        {
          path: "businesstemp", // Remove the leading '/'
          name: "BusinessCard",
          element:<BusinessTemplate/>
        },
        {
          path: "businesshours", // Remove the leading '/'
          name: "BusinessCard",
          element:<BusinessHours/>
        },
        {
          path: "backGround", // Remove the leading '/'
          name: "backGround",
          element:<BackGround/>
        },
        {
          path: "affiliations", // Remove the leading '/'
          name: "affiliations",
          element:<DashAffiliations/>
        },
        {
          path: "setting", // Remove the leading '/'
          name: "setting",
          element:<Setting/>
        },
        {
          path: "TemplateBox", // Remove the leading '/'
          name: "TemplateBox",
          element:<TemplateBox/>
        }
      ];
      
      export default DashRoutes;
