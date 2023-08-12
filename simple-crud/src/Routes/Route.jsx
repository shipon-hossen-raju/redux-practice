import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddBook from "../Pages/AddBook";
import EditBooks from "../Pages/EditBooks";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import ShowBooks from "../Pages/ShowBooks";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/show-books",
        element: <ShowBooks />,
      },
      {
        path: "/edit-book",
        element: <EditBooks />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
    ],
  },
]);

export default Route;