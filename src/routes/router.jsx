import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/MainLayout/Public pages/Home/HomeLayout";
import Home from "../pages/Home/Home";
import News from "../pages/Home/News/News";
import CategoryNews from "../pages/Home/Category News/CategoryNews";
import Loading from "../components/ui/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Home,
        children: [
          {
            path: "/",
            Component: News,
            loader: () => fetch("/news.json"),
            hydrateFallbackElement: <Loading />
          },
          {
            path: "/category/:id",
            Component: CategoryNews,
          },
        ],
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/career",
        element: <h1>Career</h1>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h1>Auth Layout</h1>,
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/*",
    element: <h1>Error 404</h1>,
  },
]);

export default router;
