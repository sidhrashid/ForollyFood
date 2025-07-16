import { Outlet } from "react-router-dom";
import Navbar from "../layout/client/Navbar";
import Footer from "../layout/client/Footer";
import Whatsapp from "../layout/client/Whatsapp";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-100">
        <Outlet />
      </main>
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default Layout;
