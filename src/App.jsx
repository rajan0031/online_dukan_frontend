// import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// import { DataProvider } from "./main page/DataContext";

import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/UpdateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Allproducts from "./pages/allproducts/Allproducts";
import ShopDashboard from "../src/components/shopDashboard/ShopDashboard"
import AddProducts from "./components/ShopProducts/AddProducts";
import OpenShop from "./components/openShop/OpenShop";
import EditYourShopProducts from "./components/ShopProducts/EditShopProducts/EditYourShopProducts";
import EditShopDetailsForm from "./components/ShopProducts/EditShopDetails.jsx/EditShopDetailsForm";
import ShopsProductsInfo from "./pages/ShopsProductsInfo/ShopsProductsInfo";
import ViewShopAndItsProducts from "./components/ViewShopAndItsProducts/ViewShopAndItsProducts";
import ShopsNearYou from "./components/ShopsNearYou/ShopsNearYou";
import DirectMessage from "./components/DirectMessageToShop/DirectMessageToShop";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          {/* <Route path="/" element={<CompA />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/allproducts" element={<Allproducts />} />
          <Route
            path="/order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteForAdmin>
                <AddProduct />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProduct />
              </ProtectedRouteForAdmin>
            }
          />

          {/*  from here ia am adding the my routes */}
          <Route path="/openshop" element={<OpenShop />} />
          <Route path="/shopdashboard" element={<ShopDashboard />} />
          <Route path="/addshopproduct" element={<AddProducts />} />

          <Route path="/editshopproduct" element={<EditYourShopProducts />} />
          <Route path="/editshopdetails" element={<EditShopDetailsForm />} />
          <Route path="/shopsproductsinfo" element={<ShopsProductsInfo />} />
          <Route path="/viewshopanditsproducts" element={<ViewShopAndItsProducts />} />
          <Route path="/shopsnearyou" element={<ShopsNearYou />} />
          <Route path="/directmessage" element={<DirectMessage />} />


          {/* end of my routes */}

          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App;

// user

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// admin

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.user.email === "raykushwaha0031@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
