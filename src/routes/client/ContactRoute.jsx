
import { Routes, Route, useLocation } from "react-router-dom";

import Contact from "../../pages/client/contact/index"
import Layout from "../../components/Layout";

const ContactRoute = () => {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.key}>
        <Route element={<Layout />}>
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ContactRoute;
