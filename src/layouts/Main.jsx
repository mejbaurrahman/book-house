import { Outlet } from "react-router-dom";
import NavBar from "../shared/Navigation/NavBar";

export default function Main() {
  return (
    <div>
      <div className="container mx-auto px-7">
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
}
