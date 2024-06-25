import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Sessions from "@/pages/Sessions";
import Contact from "@/pages/Contact";
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
    path: "/seances",
    element: <Sessions />,
    errorElement: <PageNotFound />
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <PageNotFound />
  },
  {
    path: "/admin/auth",
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
