import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { addProductsInShop } from '../../utils/shopProductsApiRoutes/shopProducts';
import Layout from '../layout/Layout';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const AddProducts = () => {


    const location = useLocation();
    const shopDetails = location.state?.shopDetails;


    const [formData, setFormData] = useState({
        title: '',
        price: '',
        imageUrl: '',
        category: '',
        description: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


    //  useEffect for viewing the data

    useEffect(() => {
        console.log(shopDetails);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle product addition logic here
        console.log(formData);
        // Reset form after submission if needed
        var userId;
        try {
            const response = await
                JSON.parse(localStorage.getItem('user'));

            console.log(response.user.uid);
            userId = response.user.uid;
        } catch (err) {
            console.log(err)
        }
        // seperations 
        setFormData({
            title: '',
            price: '',
            imageUrl: '',
            category: '',
            description: '',
        });

        const { title, price, imageUrl, category, description } = formData;

        // console.log(productCategory)

        // sending the data base to the backend

        try {
            const response = await axios.post(`${addProductsInShop}`, {

                userId,
                shopName: shopDetails.shopName,
                title,
                price,
                imageUrl,
                category,
                description,
            });
            console.log(response);
            if (response) {
                toast.success("your product is added successfully");
                navigate('/shopdashboard');
            }
        } catch (err) {
            console.log(err)
        }

    };

    return (
        <Layout>


            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Products</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                            Product Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                            Product Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-600">
                            Product Image URL
                        </label>
                        <input
                            type="url"
                            id="imageUrl"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                            Product Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                            Product Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded-md focus:outline-none hover:bg-blue-600"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default AddProducts;
