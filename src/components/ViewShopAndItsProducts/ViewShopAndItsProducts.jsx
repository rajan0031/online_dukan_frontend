import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getShopDetails } from '../../utils/shopApiRoutes/shopApiRoutes';
import Layout from '../layout/Layout';
import { getAllProductsOfShop } from '../../utils/shopProductsApiRoutes/shopProducts';
import AddToCart from "../../assets/AddToCart.png"

import { toast } from 'react-toastify';


function ViewShopAndItsProducts() {

    const location = useLocation();
    const item = location.state?.item;


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
                        userId: item.userId
                    });
                    // console.log(localStorageDetails.user.uid);

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




    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch user details from local storage
                const localStorageDetails = await JSON.parse(localStorage.getItem('user'));

                // Make API request using the user ID

                if (localStorageDetails) {


                    const response = await axios.post(`${getAllProductsOfShop}`, {
                        userId: item.userId
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

    // viwe the shops products in details  starts

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

    // handle the message portal start

    const handleMessageSend = async (shop) => {
        console.log(shop);
        try {
            const localStorageDetails = await JSON.parse(localStorage.getItem('user'));
            navigate("/directmessage", {
                state: {
                    from: localStorageDetails.user.uid,
                    to: shop?.userId,
                    fromName: localStorageDetails.user.email,
                    toName: shop.shopName,
                },
            });
        } catch (err) {
            console.log(err);
        }
    }

    // handle the message portal end





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

                    <div className="p-4">
                        <button onClick={() => handleMessageSend(shopDetailsfromDataBase)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Message
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
                                    <p className="text-gray-600 text-base mb-4">
                                        {product.description && product.description.length > 30
                                            ? `${product.description.slice(0, 70)}...`
                                            : product.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-700 font-bold"><span className="text-green-500 text-2xl">₹</span>
                                            {product.price}</p>



                                    </div>
                                    <button onClick={() => handleShopProductsInfo(product)}
                                        type="button"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-300"
                                    >
                                        View Product
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                }

                {/* end */}

            </>

        </Layout>
    )
}

export default ViewShopAndItsProducts
