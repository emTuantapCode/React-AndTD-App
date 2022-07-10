import Home from "../pages/mainlayout/home/Home";
import Login from '../pages/account/Login/Login'
import SignUp from '../pages/account/Signup/SignUp'

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
];
export default publicRoutes;