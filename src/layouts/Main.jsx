import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <h1>The online Book Shop</h1>
      <Outlet />
    </div>
  );
}
