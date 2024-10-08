import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
