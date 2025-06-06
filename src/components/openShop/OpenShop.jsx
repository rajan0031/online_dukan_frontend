import React, { useState } from 'react';
import Layout from '../layout/Layout';
import axios from 'axios';
import { addShop } from '../../utils/shopApiRoutes/shopApiRoutes';
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getShopDetails } from '../../utils/shopApiRoutes/shopApiRoutes';


const OpenShop = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [formData, setFormData] = useState({
        shopkeeperName: '',
        shopkeeperUsername: '',
        shopName: '',
        shopLogoUrl: '',
        shopMotto: '',
        shopCategory: '',
        otherCategory: '',
        paymentModes: [],
        shopkeeperMobile: '',
        shopkeeperEmail: '',
        shopAddress: '',
        totalEmployees: '',
        aboutShop: '',
        openingDate: '',
    });






    // fetch the user details from the local storage




    // getting the data from the database bhai


    useState(() => {
        const fetch = async () => {
            try {

                // getting the user from the localstorage

                const localStorageDetails = await JSON.parse(localStorage.getItem('user'));
                const localStorageShopDetails = await JSON.parse(localStorage.getItem('shop-details'));
                // console.log();
                // setUserId(response.user.uid);


                if (localStorageDetails) {


                    const response = await axios.post(`${getShopDetails}`, {
                        userId: localStorageDetails.user.uid
                    });
                    console.log(response);
                    if (response.data.response.length > 0) {
                        navigate('/shopdashboard')
                    }
                    else {
                        navigate("/openshop")
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetch();
    }, []);








    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(mode => mode !== value)) : value,
        }));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const localStorageDetails = await JSON.parse(localStorage.getItem('user'));




        const {
            shopkeeperName,
            shopkeeperUsername,
            shopName,
            shopLogoUrl,
            shopMotto,
            shopCategory,
            otherCategory,
            paymentModes,
            shopkeeperMobile,
            shopkeeperEmail,
            shopAddress,
            totalEmployees,
            aboutShop,
            openingDate,
        } = formData;

        console.log(
            // userId: localStorageDetails.user.uid,
            shopkeeperName,
            shopkeeperUsername,
            shopName,
            shopLogoUrl,
            shopMotto,
            shopCategory,
            otherCategory,
            paymentModes,
            shopkeeperMobile,
            shopkeeperEmail,
            shopAddress,
            totalEmployees,
            aboutShop,
            openingDate,
        );

        // console.log("button clicked ", userId)



        try {
            const response = await axios.post(`${addShop}`, {
                userId: localStorageDetails.user.uid,
                shopkeeperName,
                shopkeeperUsername,
                shopName,
                shopLogoUrl,
                shopMotto,
                shopCategory,
                otherCategory,
                paymentModes,
                shopkeeperMobile,
                shopkeeperEmail,
                shopAddress,
                totalEmployees,
                aboutShop,
                openingDate,
            });



            localStorage.setItem("shop-details", JSON.stringify({
                userId,
                shopkeeperName,
                shopkeeperUsername,
                shopName,
                shopLogoUrl,
                shopMotto,
                shopCategory,
                otherCategory,
                paymentModes,
                shopkeeperMobile,
                shopkeeperEmail,
                shopAddress,
                totalEmployees,
                aboutShop,
                openingDate,
            }));
            toast.info(`${response.data.message}`);

            navigate("/shopdashboard", {
                state: {
                    userId,
                    shopkeeperName,
                    shopkeeperUsername,
                    shopName,
                    shopLogoUrl,
                    shopMotto,
                    shopCategory,
                    otherCategory,
                    paymentModes,
                    shopkeeperMobile,
                    shopkeeperEmail,
                    shopAddress,
                    totalEmployees,
                    aboutShop,
                    openingDate,
                }
            })

            console.log(response.data.message);
        } catch (err) {
            console.log(err)
        }


    };

    // console.log(formData);


    return (
        <Layout>


            <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4">E-Commerce Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="shopkeeperName" className="block text-sm font-medium text-gray-700">
                            Shopkeeper Name
                        </label>
                        <input
                            type="text"
                            id="shopkeeperName"
                            name="shopkeeperName"
                            value={formData.shopkeeperName}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="shopkeeperUsername" className="block text-sm font-medium text-gray-700">
                            Shopkeeper Username
                        </label>
                        <input
                            type="text"
                            id="shopkeeperUsername"
                            name="shopkeeperUsername"
                            value={formData.shopkeeperUsername}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="shopName" className="block text-sm font-medium text-gray-700">
                            Shop Name
                        </label>
                        <input
                            type="text"
                            id="shopName"
                            name="shopName"
                            value={formData.shopName}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="shopLogoUrl" className="block text-sm font-medium text-gray-700">
                            Shop Logo URL
                        </label>
                        <input
                            type="url"
                            id="shopLogoUrl"
                            name="shopLogoUrl"
                            value={formData.shopLogoUrl}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="shopMotto" className="block text-sm font-medium text-gray-700">
                            Shop Motto
                        </label>
                        <textarea
                            id="shopMotto"
                            name="shopMotto"
                            value={formData.shopMotto}
                            onChange={handleChange}
                            rows="3"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="shopCategory" className="block text-sm font-medium text-gray-700">
                            Shop Category
                        </label>
                        <input
                            type="text"
                            id="shopCategory"
                            name="shopCategory"
                            value={formData.shopCategory}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="otherCategory" className="block text-sm font-medium text-gray-700">
                            Other Category
                        </label>
                        <input
                            type="text"
                            id="otherCategory"
                            name="otherCategory"
                            value={formData.otherCategory}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Payment Modes</label>
                        <div className="grid grid-cols-2 gap-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="paymentModes"
                                    value="creditCard"
                                    checked={formData.paymentModes.includes('creditCard')}
                                    onChange={handleChange}
                                />
                                <span className="ml-2">Credit Card</span>
                            </label>

                            {/* Add more payment modes as needed */}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="shopkeeperMobile" className="block text-sm font-medium text-gray-700">
                            Shopkeeper Mobile No
                        </label>
                        <input
                            type="tel"
                            id="shopkeeperMobile"
                            name="shopkeeperMobile"
                            value={formData.shopkeeperMobile}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="shopkeeperEmail" className="block text-sm font-medium text-gray-700">
                            Shopkeeper Official Email
                        </label>
                        <input
                            type="email"
                            id="shopkeeperEmail"
                            name="shopkeeperEmail"
                            value={formData.shopkeeperEmail}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="shopAddress" className="block text-sm font-medium text-gray-700">
                            Shop Physical Address
                        </label>
                        <textarea
                            id="shopAddress"
                            name="shopAddress"
                            value={formData.shopAddress}
                            onChange={handleChange}
                            rows="3"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="totalEmployees" className="block text-sm font-medium text-gray-700">
                            Total Employees in Shop
                        </label>
                        <input
                            type="number"
                            id="totalEmployees"
                            name="totalEmployees"
                            value={formData.totalEmployees}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="aboutShop" className="block text-sm font-medium text-gray-700">
                            About Shop and Shop Owner
                        </label>
                        <textarea
                            id="aboutShop"
                            name="aboutShop"
                            value={formData.aboutShop}
                            onChange={handleChange}
                            rows="3"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="openingDate" className="block text-sm font-medium text-gray-700">
                            Date of Shop Open on Online Dukan
                        </label>
                        <input
                            type="date"
                            id="openingDate"
                            name="openingDate"
                            value={formData.openingDate}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>

                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded-md focus:outline-none focus:shadow-outline-blue hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </Layout>
    );
};

export default OpenShop;
