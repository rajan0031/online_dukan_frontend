
// here we are defining the host of the main api
// export const host = 'http://localhost:8000';

export const host = 'https://online-dukan-backend.onrender.com';



// apiroutes for sending direct message to the backend 

export const addMessage = `${host}/addmessage`;

// api fo the getting all messages;
export const getAllMessage = `${host}/getallmessage`;

// api route for edit of the message

export const editMessage = `${host}/editmessage`;

// api route for delete fo the message

export const deleteMessage = `${host}/deletemessage`;