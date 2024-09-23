import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import ColumnPage from "./features/columns/pages/ColumnPage";

const browserRouter = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <ColumnPage />,
  },
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
