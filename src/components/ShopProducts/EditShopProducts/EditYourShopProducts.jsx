import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../layout/Layout';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { editProductsInShop } from '../../../utils/shopProductsApiRoutes/shopProducts';
const EditYourShopProducts = () => {


    const location = useLocation();
    const product = location.state?.product;

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: product.title,
        price: product.price,
        imageUrl: product.imageUrl,
        category: product.category,
        description: product.description,
    });






    useEffect(() => {


        console.log(product._id)
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Update product details logic here
        const { title, price, imageUrl, category, description } = formData;


        try {

            const response = await axios.post(`${editProductsInShop}`, {
                productId: product._id,
                title,
                price,
                imageUrl,
                category,
                description,
            });


            console.log(response);

            if (response) {
                toast.success("the Product is updated successfully");
                navigate("/shopdashboard");
            }
        } catch (error) {
            console.error('Error updating product details:', error);
        }
    };

    return (
        <Layout>
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Edit Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="productTitle" className="block text-sm font-medium text-gray-600">
                            Product Title
                        </label>
                        <input
                            type="text"
                            id="productTitle"
                            name="productTitle"
                            value={formData.tutle}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="productPrice" className="block text-sm font-medium text-gray-600">
                            Product Price
                        </label>
                        <input
                            type="text"
                            id="productPrice"
                            name="productPrice"
                            value={formData.price}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="productImageUrl" className="block text-sm font-medium text-gray-600">
                            Product Image URL
                        </label>
                        <input
                            type="url"
                            id="productImageUrl"
                            name="productImageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="productCategory" className="block text-sm font-medium text-gray-600">
                            Product Category
                        </label>
                        <input
                            type="text"
                            id="productCategory"
                            name="productCategory"
                            value={formData.category}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="productDescription" className="block text-sm font-medium text-gray-600">
                            Product Description
                        </label>
                        <textarea
                            id="productDescription"
                            name="productDescription"
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
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default EditYourShopProducts;
