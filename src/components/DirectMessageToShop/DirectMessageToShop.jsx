import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { addMessage } from '../../utils/DirectMessagePortalApi/DirectMessageApiPortal';
// import { toast, ToastContainer } from 'react-toastify/dist/components';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { getAllMessage } from '../../utils/DirectMessagePortalApi/DirectMessageApiPortal';
import { editMessage } from '../../utils/DirectMessagePortalApi/DirectMessageApiPortal';
import { deleteMessage } from '../../utils/DirectMessagePortalApi/DirectMessageApiPortal';

import Layout from '../layout/Layout';

function DirectMessage() {

    const location = useLocation();
    const from = location.state?.from;
    const to = location.state?.to;
    const fromName = location.state?.fromName;
    const toName = location.state?.toName;





    // console.log(toName);
    // console.log(fromName, currentUserDetails);
    const [message, setMessage] = useState("");
    const [messagesFromDataBase, setMessagesFromDatabase] = useState([]);
    // message id
    const [messageId, setMessageId] = useState("");
    // new message states
    const [newMessage, setNewMessage] = useState("");
    // edit boolean
    const [isEditingMessage, setIsEditingMessage] = useState(false);

    const handleInputmessage = (e) => {
        setMessage(e.target.value);
    }
    const handleMessageSend = async () => {
        console.log(message);

        try {
            if (message.length > 0) {

                const response = await axios.post(`${addMessage}`, {
                    from: from,
                    to: to,
                    message: message,
                });
                // console.log(response);

                if (response) {
                    toast.success("message is sent");
                }
            }
            else {
                console.log(fromName);
            }
        } catch (err) {
            console.log(err)
        }

        setMessage("")
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents the default behavior of the Enter key
            handleMessageSend();
        }
    };
    // start function to get all the messages from the database 
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.post(`${getAllMessage}`, {
                    from: from,
                    to: to,
                });
                // console.log(response.data.response);
                setMessagesFromDatabase(response.data.response)
            } catch (err) {
                console.log(err)
            }
        }
        fetch();
    }, [handleMessageSend]);

    // end function to get all the messages from the database 


    // message edit starts

    const handleEdit = async (msg) => {
        // console.log("edit", msg._id);
        setIsEditingMessage(true);
        setMessage(msg.message);
        setMessageId(msg._id);
    }

    // message edit ends


    // message delete starts

    const handleDelete = async (msg) => {
        console.log("delete", msg._id);
        try {
            const response = await axios.post(`${deleteMessage}`, {
                msgId: msg._id,
            });
            console.log(response);
            if (response) {
                toast.info("your message is deleted successfully");
            }
        } catch (err) {
            console.log(err);
        }
    }

    // message delete ends

    // handle final edit message start
    const handleMessageFinalEdit = async () => {
        // console.log(messageId);
        try {
            const response = await axios.post(`${editMessage}`, {
                msgId: messageId,
                newMessage: message,
            });
            console.log(response);
            if (response) {
                toast.success("your message is edited successfully");
            }
        } catch (err) {
            console.log(err);
        }
        setMessage("");
        setIsEditingMessage(false);
    }
    // handle final edit mmessage ends

    return (
        <Layout>



            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white min-h-screen">
                <div className="max-w-md w-full mx-auto bg-gray-800 p-8 rounded shadow-md overflow-y-auto ">
                    <div className="max-h-80 overflow-auto">
                        {messagesFromDataBase.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex justify-${msg.from === from ? 'end' : 'start'} mb-4`}
                            >
                                <div
                                    className={`bg-${msg.from === from ? 'indigo' : 'teal'
                                        }-500 text-white p-3 rounded max-w-3/4 shadow-xl`}
                                >
                                    <p className="mb-1">{msg.message}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs">
                                            {msg.from === from ? fromName : toName}
                                        </span>
                                        {msg.from === from && (
                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={() => handleEdit(msg)}
                                                    className="text-sm text-pink-300 hover:text-gray-500"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(msg)}
                                                    className="text-md text-red-500 hover:text-red-700"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr className="my-4 border-t border-white" />
                    <div className="sticky-bottom bg-gray-800 p-4 rounded shadow-md flex items-center message_input_field">
                        <input
                            onChange={handleInputmessage}
                            value={message}
                            type="text"
                            placeholder="Enter the message"
                            className="border p-2 rounded w-full mr-2 bg-gray-700 text-white"
                            onKeyDown={handleKeyDown}
                        />

                        {
                            !isEditingMessage ? (
                                <>
                                    <button
                                        onClick={handleMessageSend}
                                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
                                    >
                                        Send
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={handleMessageFinalEdit}
                                        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700"
                                    >
                                        Edit
                                    </button>
                                </>
                            )
                        }
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </Layout>
    )
}


export default DirectMessage
