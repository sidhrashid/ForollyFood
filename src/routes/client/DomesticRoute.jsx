
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "../../components/Layout";
import Domestic from "../../pages/client/domestic/Domestic";

const DomesticRoute = () => {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.key}>
        <Route element={<Layout />}>
          <Route path="/domestic" element={<Domestic />} />
        </Route>
      </Routes>
    </div>
  );
};

export default DomesticRoute;
