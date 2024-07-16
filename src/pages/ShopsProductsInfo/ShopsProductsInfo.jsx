import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useLocation } from 'react-router-dom'
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';

import FullPageLoader from "../Loader/FullPageLoader";
function ShopsProductsInfo() {
    const context = useContext(myContext);
    const { mode } = context;


    const location = useLocation();
    const shopProduct = location.state?.shopProduct;

    return (
        <Layout>
            <section className={`body-font overflow-hidden ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-300 text-gray-900'}`}>
                <div className="container px-5 py-10 mx-auto">
                    {shopProduct ? (
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                                alt="ecommerce"
                                className="lg:w-1/3 w-full lg:h-auto object-cover object-center rounded"
                                src={shopProduct.imageUrl}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                    BRAND NAME
                                </h2>
                                <h1 className="text-3xl title-font font-medium mb-1">
                                    {shopProduct.title}
                                </h1>
                                <div className="flex mb-4">
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </div>
                                <p className="leading-relaxed border-b-2 mb-5 pb-5">
                                    {shopProduct.description}
                                </p>
                                <div className="flex">
                                    <span className="title-font font-medium text-2xl">
                                        ₹{shopProduct.price}
                                    </span>
                                    <button
                                        className={`flex ml-auto text-white ${mode === 'dark' ? 'bg-indigo-800' : 'bg-indigo-500'} border-0 py-2 px-6 focus:outline-none hover:${mode === 'dark' ? 'bg-indigo-700' : 'bg-indigo-600'} rounded`}
                                    >
                                        Add To Cart
                                    </button>
                                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (<><FullPageLoader /></>)}
                </div>
            </section>
        </Layout >
    )
}

export default ShopsProductsInfo
