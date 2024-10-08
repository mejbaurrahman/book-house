import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layouts/Main";
import Faq from "../pages/Faq/Faq";
import BookDetail from "../pages/BookDetail/BookDetail";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
