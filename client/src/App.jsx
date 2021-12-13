import GlobalState from "./context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import { Outlet } from "react-router";
import BarraNavegacion from "./components/Navbar";
import UserApi from "./components/UserApi";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("jwt_token"));
  const state = {
    token: [token, setToken],
    userApi: UserApi(token),
  };

  return (
    <GlobalState.Provider value={state}>
      <div>
        <div>
          <Outlet />
        </div>

        <div>
          <BarraNavegacion refresh={App} />
        </div>
      </div>
    </GlobalState.Provider>
  );
}

export default App;
