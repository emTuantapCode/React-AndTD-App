import Home from "../pages/mainlayout/home/Home";
import Login from "../pages/account/Login/Login";
import SignUp from "../pages/account/Signup/SignUp";
import Profile from "../pages/mainlayout/Profile/Profile";
import PaymentComponent from "../components/PaymentComponent/PaymentComponent";
import BuyList from "../components/ProfileComponents/BuyList";
import UserRank from "../components/ProfileComponents/UserRank";
import User from "../components/ProfileComponents/User";
import Voucher from "../components/ProfileComponents/Voucher";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  {
    path: "/profile/*",
    component: Profile,
    routes: [
      { path: "/user", component: User },
      { path: "/voucher", component: Voucher },
      { path: "/rank", component: UserRank },
      { path: "/buylist", component: BuyList },
    ],
  },
  { path: "/payment", component: PaymentComponent },
];

export default publicRoutes;
