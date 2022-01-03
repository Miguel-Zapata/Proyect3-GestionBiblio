import { useState, useEffect } from "react";
import axios from "axios";

function UserApi(token) {
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const response = await axios.get("/api/users/myuser", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setIsLogged(true);
          setUser(response.data.myUser);
        } catch (err) {
          localStorage.removeItem("jwt_token");
          setIsLogged(false);
          alert(err.response.data.message);
        }
      };
      getUser();
    } else {
      setIsLogged(false);
    }
    setLoading(false);
  }, [token]);

  return {
    loading: [loading, setLoading],
    isLogged: [isLogged, setIsLogged],
    user: [user, setUser],
  };
}

export default UserApi;
