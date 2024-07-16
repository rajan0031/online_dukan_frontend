import { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";

function Order() {
  // Note: Use optional chaining to avoid errors if user is not present
  const userid = JSON.parse(localStorage.getItem("user"))?.user?.uid;
  const context = useContext(myContext);
  const { mode, loading, order } = context;

  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ? (
        <>
          <div className="h-full pt-10">
            {/* Use === for strict equality comparison */}
            {order
              .filter((obj) => obj.userid === userid)
              .map((order) => (
                <div
                  key={order.orderId} // Add a unique key for each order
                  className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
                >
                  {order.cartItems.map((item) => (
                    <div key={item.productId} className="rounded-lg md:w-2/3">
                      <div
                        className={`justify-between mb-6 rounded-lg p-6 shadow-md sm:flex sm:justify-start ${
                          mode === "dark"
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-900"
                        }`}
                      >
                        <img
                          src={item.imageUrl}
                          alt="product-image"
                          className="w-full rounded-lg sm:w-40"
                        />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold">{item.title}</h2>
                            <p className="mt-1 text-xs">{item.description}</p>
                            <p className="mt-1 text-xs">{item.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </>
      ) : (
        <h2 className="text-center text-2xl text-white">Not Ordered</h2>
      )}
    </Layout>
  );
}

export default Order;
