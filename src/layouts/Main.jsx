import { Outlet } from "react-router-dom";
import NavBar from "../shared/Navigation/NavBar";
import Footer from "../shared/Footer/Footer";

export default function Main() {
  return (
    <div>
      <div className="container mx-auto px-7">
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
