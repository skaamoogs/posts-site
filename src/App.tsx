import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import { LINKS } from "./const";
import { Home } from "./pages/home/home";
import "./App.scss";
import { Layout } from "./pages/layout/layout";
import { About } from "./pages/about/about";
import { UserInfo } from "./pages/user/user-info";

const routes: RouteObject[] = [
  {
    path: LINKS.Root.path,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: LINKS.About.path, element: <About /> },
      { path: LINKS.User.path, element: <UserInfo /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export const App = () => {
  return <RouterProvider router={router} />;
};
