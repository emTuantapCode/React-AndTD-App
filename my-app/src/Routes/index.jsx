import Home from "../pages/mainlayout/home/Home";
import Login from '../pages/account/Login/Login'
import SignUp from '../pages/account/Signup/SignUp'
import CartWaiting from "../pages/mainlayout/cartpage/Cartpage";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  { path: "/cartwaiting", component: CartWaiting},
];
export default publicRoutes;
