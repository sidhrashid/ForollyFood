import ComingSoonPopup from "../../components/ComingSoonPopup";
import AboutRoute from "./AboutRoute";
import ContactRoute from "./ContactRoute";
import DomesticRoute from "./DomesticRoute";
import ExportRoute from "./ExportRoutes";
import HomeRoute from "./HomeRoute";
import ProductsRoute from "./ProductsRoute";

const index = () => {
  return (
    <div>
      <ComingSoonPopup />
      <HomeRoute />
      <AboutRoute />
      <ContactRoute />
      <ProductsRoute />
      <ExportRoute />
      <DomesticRoute />
    </div>
  );
};

export default index;
