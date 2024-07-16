import React, { useEffect, useState } from "react";
// import { getAuth, signInAnonymously,getUserByEmail } from "firebase/auth";

export default function Temp() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
     

      try {
        // const auth = getAuth();
        // await signInAnonymously(auth);
        // const userCredential = await getUserByEmail(auth, emailToFetch);
        // const user = userCredential.toJSON();
        // setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Fetched User Data</h1>
      {userData ? (
        <ul>
          <li>Email: {userData.email}</li>
          <li>UID: {userData.uid}</li>
        </ul>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
