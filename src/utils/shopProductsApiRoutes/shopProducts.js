// here we are defining the host of the main api
// export const host = 'http://localhost:8000';



export const host = 'https://online-dukan-backend.onrender.com';

// api routes for the adding a shop products to the online dukan 

export const addProductsInShop = `${host}/addproductsinshop`;



// api routes for the editing  a shop products to the online dukan 

export const editProductsInShop = `${host}/editproductinshop`;


// api routes for the deleteing   a shop products to the online dukan 

export const deleteProductsInShop = `${host}/deleteproductinshop`;



// api routes for the getting the a shops products details from the database 

export const getAllProductsOfShop = `${host}/getallproductsofshop`;




// api routes for the getting the a shops products details from the database all the products no filter is applied such as for the particular user producta

export const getAllProductsOfAllShop = `${host}/getallproductsofallshop`;

