import "./App.css";
import NfcHome from "./Components/NfcHome";
import { Suspense } from "react";
import { Route, Router, Routes } from "react-router-dom";
import RouteNfc from "../src/RouteNfc";
import Form_LR from "./Components/Form_LR";
import SideBar from "./Components/Dash/SideBar";
import DashRoutes from "./Components/Dash/DashRoutes";

 
import Layout from "./Components/Layout/Index";
function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<NfcHome />} />
        {RouteNfc.map(({ path, element: Ele }, index) => (
          <Route key={index} path={path} element={Ele} />
        ))}
      </Routes>
            {/* <SideBar>
            <Routes>
              <Route path="/dash" element={<DashBoard />} />
              <Route path="/enquiries" element={<Enquiries />} />
              <Route path="/vcard" element={<Vcard />} />
            </Routes>
            </SideBar> */}
      {/* <Routes>
        <Route path="/sidebard" element={<SideBar />}>
          {DashRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>
      </Routes> */}
            {/* <Routes>
        <Route path="/" element={<Layout />}>
          {DashRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route> */}
      {/* <WebPageTemplate/> */}
      {/* <Trail1/> */}
    </Suspense>

    // <SideBar/>
    // <Form_LR/>
    // <NfcHome/>
  );
}

export default App;
