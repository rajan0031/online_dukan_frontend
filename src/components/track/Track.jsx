import React, { useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import products from "./Data"; // Assuming this is your static data, you can remove this import

function Track() {
  const context = useContext(myContext);
  const { mode, product } = context;

  // console.log(product.category);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredOriginalData, setFilteredOriginalData] = useState(null);

  const handleProductClick = (productId) => {
    const clickedProduct = products.find((item) => item.id === productId);
    setSelectedProduct(clickedProduct);

    // Filter the original data based on the clicked product
    const filteredData = product.filter(
      (item) => item.category === clickedProduct.title
    );
    setFilteredOriginalData(filteredData);
  };

  return (
    <>
      <section className="flex flex-wrap container mx-auto px-5 md:py-5">
        <div className="flex flex-wrap -m-4 text-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 md:w-1/2 lg:w-1/3 xl:w-1/4 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div
                className={`border-2 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg transform transition-all duration-300 ${
                  mode === "dark"
                    ? "bg-gray-800 border-gray-600 text-white"
                    : ""
                } hover:shadow-xl hover:-translate-y-2 hover:border-transparent hover:bg-gray-100 hover:text-gray-900`}
              >
                <img
                  key={product.id}
                  className="w-20 h-20 mx-auto"
                  src={product.img}
                  alt=""
                />
                <h2
                  className="title-font font-medium text-lg hover:text-gray-900"
                  style={{
                    color:
                      mode === "dark"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-900",
                  }}
                >
                  {product.title}
                </h2>
                <p className="leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Display the selected product */}
      {selectedProduct && (
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold mb-2">{selectedProduct.title}</h2>
          <p>{selectedProduct.description}</p>
          {/* Additional details if needed */}
        </div>
      )}

      {/* Display the filtered original data */}
      {filteredOriginalData && (
        <div className=" mt-4 text-center">
          <p className="font-medium text-lg">hello your collection is here</p>
          <div className=" flex flex-wrap justify-center">
            {filteredOriginalData.map((item, index) => (
              <div
                key={index}
                className="  hover:bg-blue-200 p-4 md:w-1/2 lg:w-1/3 xl:w-1/4"
              >
                <div
                  className={` hover:bg-purple-300 border-2 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg transform transition-all duration-300 ${
                    mode === "dark"
                      ? "bg-gray-800 border-gray-600 text-white"
                      : ""
                  } hover:shadow-xl hover:-translate-y-2 hover:border-transparent hover:bg-gray-100 hover:text-gray-900`}
                >
                  <img
                    className="w-20 h-20 mx-auto"
                    src={item.imageUrl} // Assuming your product data has imageUrl property
                    alt=""
                  />
                  <h2
                    className="title-font font-medium text-lg hover:text-gray-900"
                    style={{
                      color:
                        mode === "dark"
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-900",
                    }}
                  >
                    {item.title}
                  </h2>
                  <p className="leading-relaxed">{`The product details ${item.description}`}</p>
                  <p className=" text-green-300 font-bold text-lg">{` the price of the product ₹ ${item.price}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Track;
