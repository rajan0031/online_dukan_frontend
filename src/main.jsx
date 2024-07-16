import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
// import FormPage from "./main page/Front.jsx";
// import Main from "./rough_work/Main.jsx";
// import MainApp from "./main page/MainApp";
import Temp from "./components/TempCom/Temp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Temp /> */}
      <App />
    </Provider>
  </React.StrictMode>
);
