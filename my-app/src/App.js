import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import publicRoutes from "./Routes";
import { Provider } from "react-redux";
// import store from "./redux/store";
import reduxStore from "./redux";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = reduxStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
