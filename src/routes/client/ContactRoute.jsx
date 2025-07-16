
import { Routes, Route } from "react-router-dom";

import Contact from "../../pages/client/contact/index"
import Layout from "../../components/Layout";

const ContactRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ContactRoute;
