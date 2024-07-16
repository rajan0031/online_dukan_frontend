import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getShopDetails } from '../../utils/shopApiRoutes/shopApiRoutes';
import Layout from '../layout/Layout';
import { getAllProductsOfShop } from '../../utils/shopProductsApiRoutes/shopProducts';
import AddToCart from "../../assets/AddToCart.png"
import editProduct from "../../assets/edit.png"
import deleteProduct from "../../assets/deleteProduct.png"
import viewProduct from "../../assets/view.png"
import outOfStock from "../../assets/out-of-stock.png"

import { deleteProductsInShop } from '../../utils/shopProductsApiRoutes/shopProducts';
import { toast } from 'react-toastify';


const ShopDashboard = () => {
    const location = useLocation();
    const shopDetails = location?.state;
    const navigate = useNavigate();

    const [shopDetailsfromDataBase, setshopDetailsfromDataBase] = useState();

    const [allProducts, setAllProducts] = useState([]);
    // getting the data from the database bhai


    useState(() => {
        const fetch = async () => {
            try {

                // getting the user from the localstorage

                const localStorageDetails = await JSON.parse(localStorage.getItem('user'));
                // console.log();
                // setUserId(response.user.uid);


                if (localStorageDetails) {


                    const response = await axios.post(`${getShopDetails}`, {
                        userId: localStorageDetails.user.uid
                    });
                    console.log(localStorageDetails.user.uid);

                    if (response) {
                        // navigate('/shopdashboard');
                        setshopDetailsfromDataBase(response.data.response[0]);
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetch();
    }, []);


    // handle add product 

    const handleProductAdd = () => {
        navigate("/addshopproduct", {
            state: {
                shopDetails: shopDetailsfromDataBase,
            }
        });
    }


    /// here i am getting all the products whichs are available in my shop bro from the database 

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch user details from local storage
                const localStorageDetails = JSON.parse(localStorage.getItem('user'));

                // Make API request using the user ID

                if (localStorageDetails) {


                    const response = await axios.post(`${getAllProductsOfShop}`, {
                        userId: localStorageDetails.user.uid
                    });

                    if (response) {
                        setAllProducts(response.data.response);
                    }

                    console.log("the local uid is :: ", localStorageDetails.user.uid);
                    console.log("API Response :: ", response.data.response); // Assuming you want to log the response
                }

            } catch (err) {
                console.log(err);
            }
        };

        // Call the fetchData function when the component mounts
        fetchData();
    }, []);

    // handle button click of the edit shop products details

    const handleEditProducts = (product) => {
        navigate("/editshopproduct", {
            state: {
                product,
            }
        })
    }


    // handle button click of the edit shop products details

    const hanldeProductDelete = async (productId) => {
        try {
            const response = await axios.post(`${deleteProductsInShop}`, {
                productId,
            });
            console.log(response);
            if (response) {
                toast.info("Your product is deleted successfully")
                // this is for the page refresing so that our products renders correctly
                window.location.reload();
            }
        } catch (err) {
            console.log(err)
        }

    }

    // handle the shop edit routes  starts 
    const handleEditShopDetails = () => {
        navigate("/editshopdetails", {
            state: {
                shopDetails: shopDetailsfromDataBase
            }
        })
    }

    // handl ethe  edit shop routes  end

    // handling the shops products informations ends

    const handleShopProductsInfo = (shopProduct) => {
        // console.log(shopProduct)
        navigate("/shopsproductsinfo", {
            state: {

                shopProduct: shopProduct,
            }
        })
    }

    // view the shops products in details ends



    return (
        <Layout>

            <>



                <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
                    <img src={shopDetailsfromDataBase?.shopLogoUrl} alt="Shop Logo" className="w-full h-64 object-cover mb-4 rounded-md shadow-lg" />

                    <h2 className="text-4xl font-extrabold mb-2 text-indigo-600">{shopDetailsfromDataBase?.shopName}</h2>

                    <p className="text-gray-700 mb-4 font-serif italic">{shopDetailsfromDataBase?.shopMotto}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <strong className="text-indigo-600">Shop Category:</strong> {shopDetailsfromDataBase?.shopCategory}
                        </div>
                        <div>
                            <strong className="text-indigo-600">Other Category:</strong> {shopDetailsfromDataBase?.otherCategory}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <strong className="text-indigo-600">Payment Modes:</strong> {shopDetailsfromDataBase?.paymentModes.join(', ')}
                        </div>
                        <div>
                            <strong className="text-indigo-600">Total Employees:</strong> {shopDetailsfromDataBase?.totalEmployees}
                        </div>
                    </div>

                    <div className="mb-4">
                        <strong className="text-indigo-600">About Shop:</strong> {shopDetailsfromDataBase?.aboutShop}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <strong className="text-indigo-600">Shopkeeper Name:</strong> {shopDetailsfromDataBase?.shopkeeperName}
                        </div>
                        <div>
                            <strong className="text-indigo-600">Shopkeeper Username:</strong> {shopDetailsfromDataBase?.shopkeeperUsername}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <strong className="text-indigo-600">Shopkeeper Mobile:</strong> {shopDetailsfromDataBase?.shopkeeperMobile}
                        </div>
                        <div>
                            <strong className="text-indigo-600">Shopkeeper Email:</strong> {shopDetailsfromDataBase?.shopkeeperEmail}
                        </div>
                    </div>

                    <div className="mb-4">
                        <strong className="text-indigo-600">Shop Address:</strong> {shopDetailsfromDataBase?.shopAddress}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <strong className="text-indigo-600">Opening Date:</strong> {shopDetailsfromDataBase?.openingDate}
                        </div>
                        {/* Add more details as needed */}
                    </div>
                    <div className=" flex justify-between mb-8 space-y-4">
                        <button
                            onClick={handleProductAdd}
                            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue"
                        >
                            Add a Product
                        </button>

                        <button
                            onClick={handleEditShopDetails}


                            className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-green"
                        >
                            Edit Shop Details
                        </button>

                        <button
                            onClick={handleProductAdd}
                            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-red"
                        >
                            Delete Shop
                        </button>
                    </div>

                </div>

                {/* starts of product  list section */}

                {
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {allProducts.map((product) => (
                            <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img
                                    src={product.imageUrl}
                                    alt={product.description}
                                    className="w-full h-48 object-cover object-center"
                                />
                                <div className="p-6">
                                    <h2 className="text-gray-800 text-xl font-bold mb-2">{product.category}</h2>
                                    <p className="text-gray-600 text-base mb-4">{product.description}</p>

                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-700 font-bold"><span className="text-green-500 text-2xl">₹</span>
                                            {product.price}</p>

                                        <div className="flex items-center justify-between space-x-4 bg-gray-100 p-4 rounded-md shadow-md">

                                            <button onClick={() => handleShopProductsInfo(product)}
                                                type="button"
                                                className="bg-blue-300 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-300"
                                            >
                                                <img className='w-5 h-5' src={viewProduct} alt="View Products" />
                                            </button>
                                            <button
                                                onClick={() => handleEditProducts(product)}
                                                className="flex-shrink-0 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                            >
                                                <img className='w-5 h-5' src={editProduct} alt="" />
                                            </button>
                                            <button
                                                onClick={() => hanldeProductDelete(product._id)}
                                                className="flex-shrink-0 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                                            >
                                                <img className='w-5 h-5' src={deleteProduct} alt="" />
                                            </button>
                                            <button
                                                disabled
                                                className="flex-shrink-0 px-4 py-2 bg-gray-500 text-white rounded-full cursor-not-allowed"
                                            >
                                                <img className='w-5 h-5' src={outOfStock} alt="" />
                                            </button>
                                            <button

                                                className="flex-shrink-0 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                            >
                                                <img className='w-5 h-5' src={AddToCart} alt="" />
                                            </button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }

                {/* end */}

            </>

        </Layout>
    );
};

export default ShopDashboard;
