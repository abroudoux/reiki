import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Auth from "@/pages/Auth";
import Dashboard from "@/pages/Dashboard";
import PageNotFound from "@/pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <PageNotFound />
  },
  {
    path: "/admin",
    element: <Auth />,
    errorElement: <PageNotFound />
  },
  {
    path: "/admin/app",
    element: <Dashboard />,
    errorElement: <PageNotFound />
  }
]);

export default router;
