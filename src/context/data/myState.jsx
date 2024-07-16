// MyState.js
import { useEffect, useState } from "react";
import MyContext from "./myContext";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../../fireabase/FirebaseConfig";

function MyState(props) {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    const prevMode = mode;
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    document.body.style.backgroundColor =
      prevMode === "light" ? "rgb(17, 24, 39)" : "white";
  };

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addProduct = async () => {
    if (
      !products.title ||
      !products.price ||
      !products.imageUrl ||
      !products.category ||
      !products.description
    ) {
      return toast.error("All fields are required");
    }

    setLoading(true);

    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, products);
      toast.success("Add product successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      getProductData();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const [product, setProduct] = useState([]);

  const getProductData = () => {
    setLoading(true);

    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));

      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArray);
      });

      return unsubscribe; // Return the function to unsubscribe
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const edithandle = (item) => {
    setProducts(item);
  };

  const updateProduct = async () => {
    setLoading(true);

    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      getProductData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (item) => {
    setLoading(true);

    try {
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product Deleted successfully");
      getProductData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true);

    try {
      const result = await getDocs(collection(fireDB, "order"));
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
      });
      setOrder(ordersArray);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true);

    try {
      const result = await getDocs(collection(fireDB, "users"));
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
      });
      setUser(usersArray);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrderData();
    getUserData();
  }, []);

  const [searchkey, setSearchkey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        product,
        edithandle,
        updateProduct,
        deleteProduct,
        order,
        user,
        searchkey,
        setSearchkey,
        filterType,
        setFilterType,
        filterPrice,
        setFilterPrice,
        
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
