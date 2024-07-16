import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fireabase/FirebaseConfig";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
// import { name } from "./Signup";
import { useLocation } from "react-router-dom";
// import useSignupState from "./signupState"; // Import the hook

function Login() {
  const [name, setname] = useState("");
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const { search } = location;
  const params = new URLSearchParams(search);
  const userName = params.get("name");
  console.log("the user name is", userName);

  const navigate = useNavigate();
  // console
  console.log("login sighn with email", signInWithEmailAndPassword);
  const login = async () => {
    setLoading(true);
    try {
      console.log("email" + ": " + email, "password" + ": " + password);
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Login failed", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-purple-400 flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className="bg-blue-500 px-12 py-12 rounded-lg shadow-lg">
        <div>
          <h1 className="text-center text-red-600 text-xl mb-4 font-bold">
            {userName ? `Hello ${userName}` : `Hello`}
          </h1>
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            𝙻𝚘𝚐𝚒𝚗 𝚝𝚘 𝙾𝚗𝚕𝚒𝚗𝚎 𝙳𝚞𝚔𝚊𝚗
          </h1>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center mb-3">
          <button
            onClick={login}
            className="bg-green-400 w-full hover:bg-green-600  text-black font-bold px-2 py-2 rounded-lg"
          >
            Login
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Do not have an account{" "}
            <Link className="text-green-500 font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
