import { useContext } from "react";
import myContext from "../../../context/data/myContext";

function AddProduct() {
  const context = useContext(myContext);
  const { products, setProducts, addProduct } = context;
  return (
    <div>
      <div className=" bg-purple-400 flex justify-center items-center h-screen">
        <div className=" bg-blue-300 px-10 py-10 rounded-xl ">
          <div className="">
            <h1 className=" text-gray-900 text-center  text-3xl mb-4 font-bold">
              Ａｄｄ Ｐｒｏｄｕｃｔｓ
            </h1>
          </div>
          <div>
            <input
              type="text"
              value={products.title}
              onChange={(e) =>
                setProducts({ ...products, title: e.target.value })
              }
              name="title"
              className=" bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-900 placeholder:text-gray-500 outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.price}
              onChange={(e) =>
                setProducts({ ...products, price: e.target.value })
              }
              name="price"
              className=" bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-900 placeholder:text-gray-500 outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.imageUrl}
              onChange={(e) =>
                setProducts({ ...products, imageUrl: e.target.value })
              }
              name="imageurl"
              className=" bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-900 placeholder:text-gray-500 outline-none"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.category}
              onChange={(e) =>
                setProducts({ ...products, category: e.target.value })
              }
              name="category"
              className=" bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-500 placeholder:text-gray-500 outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              name="title"
              value={products.description}
              onChange={(e) =>
                setProducts({ ...products, description: e.target.value })
              }
              className=" bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-900 placeholder:text-gray-500 outline-none"
              placeholder="Describe your product in order to attract more and more customers."
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={addProduct}
              className=" hover:bg-blue-700  bg-blue-500 w-full text-gray-900 font-bold  px-2 py-2 rounded-lg"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
