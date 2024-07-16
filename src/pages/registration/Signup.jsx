import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../fireabase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import useSignupState from "./signupState"; // Import the hook

function Signup() {
  const navigate = useNavigate();

  const { name, setName } = useSignupState(); // Use the hook to manage the 'name' state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const signup = async () => {
    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };

      console.log(user.name, user.uid, user.email, user.time);

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      navigate(`/login?name=${name}`);
      toast.success(`${name} you have signup successfully`);

      setName(""); // Clear the name after signup
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  console.log("the data is ", name, email, password);

  return (
    <div className="bg-purple-400 flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className=" bg-blue-500 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴏɴʟɪɴᴇ ᴅᴜᴋᴀɴ
          </h1>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className="bg-white-100 text-gray-900 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-gray-900 outline-none"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className=" bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-900 placeholder:text-gray-900 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-gray-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-gray-900 placeholder:text-gray-900 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <Link to="/login">
            <button
              onClick={signup}
              className=" bg-green-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
            >
              Signup
            </button>
          </Link>
        </div>
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className=" text-xl text-green-400 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
// console.log(name);

// export { name };

export default Signup;
