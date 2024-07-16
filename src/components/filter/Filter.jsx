import { useContext } from "react";
import myContext from "../../context/data/myContext";

function Filter() {
  const context = useContext(myContext);
  const {
    mode,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
    product,
  } = context;

  // Filter the products based on the selected category and price
  const filteredProducts = product.filter((item) => {
    // Check if the category filter is selected
    const categoryFilter = filterType === "all" || item.category === filterType;

    // Check if the price filter is selected
    const priceFilter = filterPrice === "all" || item.price === filterPrice;

    // Return true only if both filters match
    return categoryFilter && priceFilter;
  });

  // Extract unique categories from the product data
  const uniqueCategories = [...new Set(product.map((item) => item.category))];

  return (
    <div className="container mx-auto px-4 mt-5">
      <div
        className={`text-white p-6 rounded-lg ${
          mode === "dark" ? "bg-gray-800" : "bg-blue-300"
        } shadow-md border border-gray-200`}
      >
        <div className="relative">
          <div className="absolute flex items-center ml-2 h-full">
            {/* ... (unchanged) */}
          </div>
          {/* ... (unchanged) */}
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="font-medium text-lg">Filters</p>
          <button
            onClick={() => {
              // Reset both filters
              setFilterType("all");
              setFilterPrice("all");
            }}
            className="text-white px-4 py-2 bg-gray-900 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Reset Filter
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {/* Dropdown for filterType */}
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            // className="text-white p-3 rounded-md bg-gray-900 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            //   className={`text-${
            //     mode === "dark" ? "white" : "blue"
            //   } body-font $ { mode==="dark" ? "bg-gray-800" : "bg-blue-500" }`}
            className="text-white p-3 rounded-md bg-gray-900 border-transparent outline-0 focus:border-gray-500 focus:bg-gray-400 focus:ring-0 text-sm"
          >
            {/* Dropdown option for all categories */}
            <option value="all">All Categories</option>
            {/* Mapping over unique categories to create options */}
            {uniqueCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {/* Dropdown for filterPrice */}
          <select
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            className="text-white p-3 rounded-md bg-gray-900 border-transparent outline-0 focus:border-gray-500 focus:bg-gray-400 focus:ring-0 text-sm"
            // className={`text-${
            //   mode === "dark" ? "white" : "blue"
            // } body-font $ { mode==="dark" ? "bg-gray-800" : "bg-blue-500" }`}
          >
            {/* Dropdown option for all prices */}
            <option value="all">All Prices</option>
            {/* Mapping over product array to create options */}
            {product.map((item, index) => (
              <option key={index} value={item.price}>
                {item.price}
              </option>
            ))}
          </select>
        </div>
        {/* Display the filtered products */}
        <div className="mt-4">
          <p className="font-medium text-lg">Filtered Products</p>
          <ul>
            {filteredProducts.map((item, index) => (
              <li key={index} className="bg-gray-200 p-2 rounded-md mb-2">
                {item.name} - Category: {item.category}, Price: {item.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;
