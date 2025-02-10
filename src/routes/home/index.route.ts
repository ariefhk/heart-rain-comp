import HomePage from "../../components/pages/home-page";
import GuestLayout from "../../components/templates/guest-layout";
import { RouteRootInterface } from "../route.utils";

const homeRoutes: RouteRootInterface[] = [
  {
    name: "home-route",
    path: "/",
    component: GuestLayout,
    routes: [
      {
        name: "home",
        path: "/",
        component: HomePage,
      },
    ],
  },
];

export default homeRoutes;
