import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
