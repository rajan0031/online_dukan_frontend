import { useContext } from "react";
import myContext from "../../context/data/myContext";
import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, fireDB } from "../../fireabase/FirebaseConfig";
// import { Firestore } from "firebase/firestore";
// import { Firestore } from "firebase/firestore";
// import { useData } from "../../main page/DataContext";
import { Navigate } from "react-router-dom";
function HeroSection() {
  const context = useContext(myContext);
  const { mode } = context;
  const navigate = useNavigate();
  const isDarkMode = mode === "dark";

  return (
    <div
      className={`relative flex items-center justify-center h-screen ${isDarkMode ? " text-white" : "text-blue-900"
        } overflow-hidden`}
    >
      <div className="absolute z-10 text-center w-full">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold ${isDarkMode ? " text-white" : "text-blue-900"
            } mb-4`}
        >
          {/* Hello {<span className="text-red-500">{name}</span>} Elevate Your */}
          Shopping and Selling Experience with{" "}
          {/* {<span className="text-red-500">{shopName}</span>} */}
        </h1>
        <p
          className={`text-lg sm:text-xl md:text-2xl ${isDarkMode ? " text-white" : "text-blue-900"
            } mb-6`}
        >
          Welcome to Online Dukan, your gateway to a seamless shopping journey.
          We bridge the gap between you and local stores, ensuring swift and
          stress-free deliveries directly to your doorstep.
        </p>
        <p
          className={`text-lg sm:text-xl md:text-2xl ${isDarkMode ? " text-white" : "text-blue-900"
            } mb-6`}
        >
          Explore a world of convenience with our curated selection of products.
          From daily essentials to unique finds, Online Dukan has it all. Say
          goodbye to long queues and hello to effortless shopping.
        </p>

        <button onClick={() => { navigate("/shopsnearyou") }}
          className={`bg-blue-500 text-white py-2 px-6 rounded-full font-bold text-lg sm:text-xl ${isDarkMode ? "hover:bg-blue-700" : "hover:bg-blue-600"
            } transition duration-300`}
        >
          Discover Your Favorites Shops and Products Near you
        </button>

      </div>
      <img
        className="w-full h-full object-cover absolute top-0 left-0 z-0 opacity-70"
        src="https://img.freepik.com/free-vector/flat-design-delivery-concept_23-2149147990.jpg?size=626&ext=jpg&ga=GA1.1.349068600.1702206412&semt=ais"
        alt="Online Dukan Delivery"
      />
    </div>
  );
}

export default HeroSection;
