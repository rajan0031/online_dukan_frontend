import { useContext } from "react";
import myContext from "../../context/data/myContext";
import { Link, useLocation } from "react-router-dom";
import WhatsAppButton from "../whatsup feature/Whatsup";
// import { useLocation } from "react-router-dom";
function Footer() {
  const location = useLocation();
  const { state } = location;
  const formData = state ? state.formData : null;
  // const userName = formData ? formData.name : "";
  const shopName = formData ? formData.shopName : "";

  // Accessing the context
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      {/* Footer Section */}
      <footer
        className={`text-white body-font ${
          mode === "dark" ? "bg-gray-800" : "bg-blue-500"
        }`}
      >
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* Categories Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className={`text-white body-font ${
                  mode === "dark" ? "bg-gray-800" : "bg-blue-500"
                }`}
              >
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to="/"
                    className={`text-white body-font ${
                      mode === "dark" ? "bg-gray-800" : "bg-blue-500"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                {/* ... (other category links) ... */}
              </nav>
            </div>

            {/* Customer Service Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className={`text-white body-font ${
                  mode === "dark" ? "bg-gray-800" : "bg-blue-500"
                }`}
              >
                Customer Service
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to="/returnpolicy"
                    className={`text-white body-font ${
                      mode === "dark" ? "bg-gray-800" : "bg-blue-500"
                    }`}
                  >
                    Return Policy
                  </Link>
                </li>
                {/* ... (other customer service links) ... */}
              </nav>
            </div>

            {/* Services Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className={`text-white body-font ${
                  mode === "dark" ? "bg-gray-800" : "bg-blue-500"
                }`}
              >
                Services
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to="/privacypolicy"
                    className={`text-white body-font ${
                      mode === "dark" ? "bg-gray-800" : "bg-blue-500"
                    }`}
                  >
                    Privacy
                  </Link>
                </li>
                {/* ... (other services links) ... */}
              </nav>
            </div>

            {/* Payment Methods Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <img
                src="https://ecommerce-sk.vercel.app/pay.png"
                alt="Payment Methods"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`text-white body-font ${
            mode === "dark" ? "bg-gray-800" : "bg-blue-500"
          }`}
        >
          <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
            <Link to="/home" className="flex">
              <div className="flex">
                <h1
                  className={`text-white body-font ${
                    mode === "dark" ? "bg-gray-800" : "bg-blue-500"
                  }`}
                >
                  {shopName}
                </h1>
              </div>
            </Link>

            {/* Copyright Information */}
            <p
              className={`text-white body-font ${
                mode === "dark" ? "bg-gray-800" : "bg-blue-500"
              }`}
            >
              2023 Ｏｎｌｉｎｅ Ｄｕｋａｎ and founder Rajan
              <Link to="/">
                <a
                  href="https://www.onlinedukan.com"
                  rel="noopener noreferrer"
                  className={`text-white body-font ${
                    mode === "dark" ? "bg-gray-800" : "bg-blue-500"
                  }`}
                  target="_blank"
                >
                  {" "}
                  www.onlinedukan.com
                </a>
              </Link>
            </p>

            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

export default Footer;
