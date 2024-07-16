import { Fragment, useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { useData } from "../../main page/DataContext";
// import { useData } from "../../main page/DataContext";
function Navbar() {
  // const { formData } = useData();

  // console.log("the form data2 is: ", formData.shopName);

  // Access formData from state

  // setname1(userName);

  // setshop1(shopName);

  // console.log(formData.name);
  // console.log(formData.shopName);
  // let str1 = formData.name;
  // let str = "";

  // for (let i of str1) {
  //   if (i === " ") {
  //     break;
  //   } else {
  //     str += i; // Concatenate characters to the string
  //   }
  // }

  // // Capitalize the first letter of the first name
  // str = str.charAt(0).toUpperCase() + str.slice(1);

  // // formData.name = str;
  // const modifiedFormData = { ...formData, name: str };

  // Accessing context to get the mode and toggle function
  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  // State for controlling the mobile menu
  const [open, setOpen] = useState(false);

  // Retrieving user information from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    // localStorage.clear('user');
    // this clear function will remove the all stoored detais from the localstorage in the web browsers
    window.location.href = "/login";
  };

  // Accessing cart items from Redux store
  const cartItems = useSelector((state) => state.cart);

  return (
    <div
      className={`bg-white sticky top-0 z-50 ${mode === "dark" ? "dark-mode" : ""
        }`}
    >
      {/* Mobile Menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          {/* Background overlay */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          {/* Mobile menu content */}
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className={`relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl ${mode === "dark" ? "dark-mode" : ""
                  }`}
              >
                {/* Close button */}
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>

                {/* Menu items */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={"/allproducts"}
                    className={`text-sm font-medium text-gray-900 ${mode === "dark" ? "text-white" : ""
                      }`}
                  >
                    All Products
                  </Link>

                  {user ? (
                    <div>


                      <div className="flow-root">
                        <Link
                          to={"/order"}
                          className={`-m-2 block p-2 font-medium text-gray-900 ${mode === "dark" ? "text-white" : ""
                            }`}
                        >
                          Order
                        </Link>
                      </div>
                      <div className="flow-root">
                        <Link
                          to={"/openshop"}
                          className={`-m-2 block p-2 font-medium text-gray-900 ${mode === "dark" ? "text-white" : ""
                            }`}
                        >
                          Open Shop
                        </Link>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {user?.user?.email === "raykushwaha0031@gmail.com" ? (
                    <div className="flow-root">
                      <Link
                        to={"/dashboard"}
                        className={`-m-2 block p-2 font-medium text-gray-900 ${mode === "dark" ? "text-white" : ""
                          }`}
                      >
                        Admin
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <div className="flow-root">
                      <a
                        onClick={logout}
                        className={`-m-2 block p-2 font-medium text-gray-900 cursor-pointer ${mode === "dark" ? "text-white" : ""
                          }`}
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <Link
                        to={"/signup"}
                        className={`-m-2 block p-2 font-medium text-gray-900 cursor-pointer ${mode === "dark" ? "text-white" : ""
                          }`}
                      >
                        Signup
                      </Link>
                    </div>
                  )}

                  {/* <div className="flow-root">rajan</div> */}
                </div>

                {/* Currency selection */}
                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop Header */}

      <header className="relative bg-white">
        <p
          className="flex h-10 items-center justify-center bg-blue-500  px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          𝐒𝐡𝐨𝐩 𝐒𝐦𝐚𝐫𝐭, 𝙖𝙣𝙙 𝙨𝙚𝙡𝙡 𝙨𝙢𝙖𝙧𝙩 𝙬𝙞𝙩𝙝 Ｏｎｌｉｎｅ Ｄｕｋａｎ 𝐒𝐡𝐢𝐩 𝐅𝐫𝐞𝐞!
          𝐄𝐧𝐣𝐨𝐲 𝐜𝐨𝐦𝐩𝐥𝐢𝐦𝐞𝐧𝐭𝐚𝐫𝐲 𝐝𝐞𝐥𝐢𝐯𝐞𝐫𝐲 𝐨𝐧 𝐨𝐫𝐝𝐞𝐫𝐬 𝐨𝐯𝐞𝐫
          {"  "}
          <span style={{ color: "green", fontSize: "25px" }}> ₹ 300 </span>
          𝐚𝐭 Ｏｎｌｉｎｅ Ｄｕｋａｎ
        </p>

        {/* Main navigation */}
        <nav
          aria-label="Top"
          className={`px-4 sm:px-6 lg:px-8 shadow-xl ${mode === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
        >
          <div className="">
            <div className="flex h-16 items-center">
              {/* Mobile menu button */}
              <button
                type="button"
                className={`rounded-md bg-white p-2 text-gray-400 lg:hidden ${mode === "dark" ? "dark-mode" : ""
                  }`}
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1
                      className={`text-2xl font-bold text-black  px-2 py-1 rounded ${mode === "dark" ? "text-white" : ""
                        }`}
                    >
                      Ｏｎｌｉｎｅ Ｄｕｋａｎ
                    </h1>
                  </div>
                </Link>
              </div>

              {/* Desktop navigation */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/allproducts"}
                    className={`text-sm font-medium text-gray-700 ${mode === "dark" ? "text-white" : ""
                      }`}
                  >
                    All Products
                  </Link>

                  {user ? (
                    <>


                      <Link
                        to={"/order"}
                        className={`text-sm font-medium text-gray-700 ${mode === "dark" ? "text-white" : ""
                          }`}
                      >
                        Order
                      </Link>

                      <div className="flow-root">
                        <Link
                          to={"/openshop"}
                          className={`-m-2 block p-2 font-medium text-gray-900 ${mode === "dark" ? "text-white" : ""
                            }`}
                        >
                          Open Shop
                        </Link>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={"/signup"}
                      className={`text-sm font-medium text-gray-700 ${mode === "dark" ? "text-white" : ""
                        }`}
                    >
                      Signup
                    </Link>
                  )}

                  {user?.user?.email === "raykushwaha0031@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className={`text-sm font-medium text-gray-700 ${mode === "dark" ? "text-white" : ""
                        }`}
                    >
                      Admin
                    </Link>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <a
                      onClick={logout}
                      className={`text-sm font-medium text-gray-700 cursor-pointer ${mode === "dark" ? "text-white" : ""
                        }`}
                    >
                      Logout
                    </a>
                  ) : (
                    ""
                  )}
                  {/* <Link to={{ pathname: "/profile", state: { formData } }}> */}
                  {/* <div
                    className={`text-sm font-medium text-gray-700 cursor-pointer ${
                      mode === "dark" ? "text-white" : ""
                    }`}
                  >
                    rajan
                  </div> */}
                  {/* </Link> */}
                </div>

                {/* Dark mode toggle */}
                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : mode === "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className={`group -m-2 flex items-center p-2 ${mode === "dark" ? "text-white" : ""
                      }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                    <span className="ml-2 text-sm font-medium">
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
