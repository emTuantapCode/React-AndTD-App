import Home from "../pages/mainlayout/home/Home";
import Login from '../pages/account/Login/Login'
import SignUp from '../pages/account/Signup/SignUp'
import Profile from '../pages/mainlayout/Profile/Profile'
import PaymentComponent from "../components/PaymentComponent/PaymentComponent";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  {path:"/profile",component:Profile },
  {path:'/payment',component:PaymentComponent},
];
export default publicRoutes;