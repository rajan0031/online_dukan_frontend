import React, { useEffect, useState } from 'react';
import { getAllShopsNearYou } from '../../utils/shopApiRoutes/shopApiRoutes';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ShopsNearYou() {
    const [allShopsFromDatabase, setAllShopsFromDatabase] = useState([]);

    const [localUser, setLocalUser] = useState();

    const navigate = useNavigate();
    useEffect(() => {
        const fetchShops = async () => {
            try {
                const response = await axios.post(`${getAllShopsNearYou}`);
                if (response && response.data && response.data.response) {
                    setAllShopsFromDatabase(response.data.response);
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchShops();
    }, []);



    // handling the shops products informations start
    const handleViewShopsAndItsProducts = async (item) => {

        console.log(item)

        try {
            const response = await JSON.parse(localStorage.getItem('user'));
            if (item.userId === response.user.uid) {
                navigate("/openshop")
            }
            else {

                navigate("/viewshopanditsproducts", {
                    state: {
                        item: item
                    }
                })
            }

        } catch (err) {
            console.log(err);
        }



    }
    // handling the shops products informations ends


    // handle the message portal start

    const handleMessageSend = async (shop) => {
        console.log(shop);
        try {
            const localStorageDetails = await JSON.parse(localStorage.getItem('user'));

            // if (localStorageDetails.user.uid !== shop.userId) {


            navigate("/directmessage", {
                state: {
                    from: localStorageDetails.user.uid,
                    to: shop?.userId,
                    fromName: localStorageDetails.user.email,
                    toName: shop.shopName,
                },
            });
            // }
        } catch (err) {
            console.log(err);
        }
    }

    // handle the message portal end


    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold mb-4">Shops Near You</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allShopsFromDatabase.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <img src={item.shopLogoUrl} alt={item.shopName} className="mb-4 rounded-lg" />
                        <h2 className="text-xl font-semibold mb-2">{item.shopName}</h2>
                        <p className="text-gray-600 mb-4">{item.aboutShop}</p>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-500">{`Opened on ${new Date(item.openingDate).toLocaleDateString()}`}</p>
                            <button onClick={() => { handleMessageSend(item) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Message
                            </button>
                            <button onClick={() => handleViewShopsAndItsProducts(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                view Shop
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopsNearYou;
