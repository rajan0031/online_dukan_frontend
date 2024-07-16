import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import Layout from "../../components/layout/Layout";
import Filter from "../../components/filter/Filter";
import myContext from "../../context/data/myContext";
import axios from "axios";
import { getAllProductsOfAllShop } from "../../utils/shopProductsApiRoutes/shopProducts";
import { Navigate, useNavigate } from "react-router-dom";

import FullPageLoader from "../Loader/FullPageLoader";

function AllProducts() {

  // useStates
  const [localShopsProducts, setLocalShopsProducts] = useState();

  const [localUserId, setLocalUserId] = useState();

  // useNavigate

  const navigate = useNavigate();


  const context = useContext(myContext);
  const {
    mode,
    product,
    searchkey,
    filterType,
    // setFilterType,
    filterPrice,
    // setFilterPrice,
  } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    dispatch(addToCart(product));
    // Consider importing toast or providing an alternative for the toast function
    // toast.success('Added to cart');
  };

  // set the local user id start
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await JSON.parse(localStorage.getItem('user'));
        console.log(response.user.uid)
        setLocalUserId(response.user.uid);
      } catch (err) {
        console.log(err)
      }
    }
    fetch();
  }, [])
  // set the local user id end

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // start of  fetching the all products from the near by shpos

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.post(`${getAllProductsOfAllShop}`);
        // console.log(response.data.response);
        if (response) {
          setLocalShopsProducts(response.data.response);
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetch();
  }, [])

  // end of  fetching the all products from the near by shpos  


  // handling the shops products informations start
  const handleViewShopsAndItsProducts = (item) => {
    if (item.userId === localUserId) {
      navigate("/openshop")
    }
    else {

      navigate("/viewshopanditsproducts", {
        state: {
          item: item
        }
      })
    }
  }
  // handling the shops products informations ends

  const handleShopProductsInfo = (shopProduct) => {
    // console.log(shopProduct)
    navigate("/shopsproductsinfo", {
      state: {

        shopProduct: shopProduct,
      }
    })
  }

  return (
    <>


      <Layout>
        {/* <div>Shop from the online Dukan </div> */}
        <Filter />
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-8 md:py-16 mx-auto">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
              <h1
                className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Our Latest Collection
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>

            <div className="flex flex-wrap -m-4">
              {product
                .filter((obj) => obj.title.toLowerCase().includes(searchkey))
                .filter((obj) => obj.category.toLowerCase().includes(filterType))
                .filter((obj) => obj.price.includes(filterPrice))
                .map((item) => {
                  const { id, title, price, imageUrl } = item;
                  return (
                    <div
                      onClick={() =>
                        (window.location.href = `/productinfo/${id}`)
                      }
                      key={id}
                      className="p-4 md:w-1/4 drop-shadow-lg"
                    >
                      <div
                        className="h-full border-2 hover:bg-blue-300 hover:shadow-purple-800 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-blue-900 border-opacity-60 rounded-2xl overflow-hidden"
                        style={{
                          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        <div className="flex justify-center cursor-pointer">
                          <img
                            className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                            src={imageUrl}
                            alt="product"
                          />
                        </div>
                        <div className="p-5 border-t-2">
                          <h2
                            className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            A product of Online Dukan
                          </h2>
                          <h1
                            className="title-font text-lg font-medium text-gray-900 mb-3"
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {title}
                          </h1>
                          <p
                            className="leading-relaxed mb-3"
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            ₹{price}
                          </p>
                          <div className="flex justify-center">
                            <button
                              type="button"
                              onClick={() => addCart(item)}
                              className="focus:outline-none text-white bg-blue-500 hover:bg-blue-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
                            >
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {/*  starts of the the local shops products */}




              <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 md:py-16 mx-auto">
                  <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1
                      className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Local Shops Collection
                    </h1>
                    <div className="h-1 w-20 bg-blue-500 rounded"></div>
                  </div>

                  <div className="flex flex-wrap -m-4">
                    {localShopsProducts &&
                      Object.values(localShopsProducts).map((item) => (
                        <div
                          key={item._id}

                          className="p-4 md:w-1/4 drop-shadow-lg"
                        >
                          <div
                            className="h-full border-2 hover:bg-blue-300 hover:shadow-purple-800 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-blue-900 border-opacity-60 rounded-2xl overflow-hidden"
                            style={{
                              backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                              color: mode === "dark" ? "white" : "",
                            }}
                          >
                            <div className="flex justify-center cursor-pointer">
                              <img
                                className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                                src={item.imageUrl}
                                alt="product"
                              />
                            </div>

                            <div className="p-5 border-t-2">
                              <button onClick={() => handleViewShopsAndItsProducts(item)}> <h1
                                className="title-font text-lg font-medium text-gray-900 mb-3"
                                style={{ color: mode === "dark" ? "white" : "" }}
                              > {" "}
                                {item.shopName || "Product ShopName"}
                              </h1></button>
                              <h1
                                className="title-font text-lg font-medium text-gray-900 mb-3"
                                style={{ color: mode === "dark" ? "white" : "" }}
                              >
                                {item.title || "Product Title"}
                              </h1>
                              <p
                                className="leading-relaxed mb-3"
                                style={{ color: mode === "dark" ? "white" : "" }}
                              >
                                ₹{item.price || "0"}
                              </p>
                              <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2">
                                <button
                                  type="button"
                                  onClick={() => addCart(item)}
                                  className="focus:outline-none text-white bg-blue-500 hover:bg-blue-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2 sm:w-auto"
                                >
                                  Add To Cart
                                </button>

                                <button
                                  type="button"
                                  onClick={() => handleShopProductsInfo(item)}
                                  className="focus:outline-none text-white bg-blue-500 hover:bg-blue-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2 sm:w-auto"
                                >
                                  View Product
                                </button>
                              </div>

                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </section>

              {/*  ends of the the local shops products */}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default AllProducts;
