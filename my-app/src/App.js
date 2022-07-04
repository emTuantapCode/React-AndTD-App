import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "antd/dist/antd.css";
import { MainPage } from './pages/layout/main01'
import { Login } from './pages/account/login'
import { ForgetPassWord } from './pages/account/forgetpassword'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>;
        <Route path="/login" element={<Login />}/>;
        <Route path="/forgetpassword" element={<ForgetPassWord />}/>;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
