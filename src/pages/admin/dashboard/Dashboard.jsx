import { useContext } from "react";
// import { FaUserTie } from "react-icons/fa";
import myContext from "../../../context/data/myContext";
import Layout from "../../../components/layout/Layout";
import DashboardTab from "./DashboardTab";

function Dashboard() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex flex-wrap -m-4 text-center">
            {/* Product Section */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className="bg-purple-300 border-2 hover:shadow-blue-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border-gray-300 px-4 py-3 rounded-xl "
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="text-purple-500  w-12 h-12 mb-3 inline-block">
                  <img src="./img/total.png" alt="" />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  10
                </h2>
                <p
                  className="text-purple-500 font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Products
                </p>
              </div>
            </div>

            {/* Order Section */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className="bg-purple-300 border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="text-purple-500 w-12 h-12 mb-3 inline-block">
                  <img src="./img/history.png" alt="" />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  10
                </h2>
                <p
                  className="text-purple-500 font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Orders
                </p>
              </div>
            </div>

            {/* Users Section */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className=" bg-purple-300 border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]  border-gray-300 px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="text-purple-500 w-12 h-12 mb-3 inline-block">
                  <img src="./img/group.png" alt="" />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  20
                </h2>
                <p
                  className="text-purple-500 font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Users
                </p>
              </div>
            </div>

            {/* Additional Section (modify as needed) */}
            <div className=" p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className="bg-purple-300 border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]  border-gray-300 px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="text-purple-500 w-12 h-12 mb-3 inline-block">
                  <img src="./img/sold-out.png" alt="" />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  20
                </h2>
                <p
                  className="text-purple-500 font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total sold products
                </p>
              </div>
            </div>
          </div>
        </div>
        <DashboardTab />
      </section>
    </Layout>
  );
}

export default Dashboard;
