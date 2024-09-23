import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layouts/Main";
import Faq from "../pages/Faq/Faq";
import BookDetail from "../pages/BookDetail/BookDetail";

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
        path: "/bookDetails/:bookId",
        element: <BookDetail />,
      },
    ],
  },
]);

export default router;
