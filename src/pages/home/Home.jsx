import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/myContext"; // Import the context

import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import { Link } from "react-router-dom";

function Home() {
  // Step 1: Use useContext to access the context values
  const context = useContext(MyContext);

  return (
    // Step 2: Wrap the entire component tree in MyContext.Provider
    <MyContext.Provider value={context}>
      <Layout>
        {/* Step 3: Render the components */}
        <HeroSection />
        <Filter />
        <ProductCard />
        {/* Additional UI elements */}
        <div className="flex justify-center -mt-10 mb-4">
          <Link to={"/allproducts"}>
            <button className=" bg-gray-300 px-5 py-2 rounded-xl">
              See more
            </button>
          </Link>
        </div>
        <Track />
        <Testimonial />
      </Layout>
    </MyContext.Provider>
  );
}

export default Home;
