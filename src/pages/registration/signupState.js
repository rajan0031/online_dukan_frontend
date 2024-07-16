// signupState.js
import { useState } from "react";

const useSignupState = () => {
  const [name, setName] = useState("");

  return { name, setName };
};

export default useSignupState;
