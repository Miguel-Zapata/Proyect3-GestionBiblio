import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';

import { Outlet } from "react-router";

import BarraNavegacion from "./components/Navbar";

function App() {
  return (
    <div>

      <div>
        <Outlet />  
      </div>

      <div>
        <BarraNavegacion />
      </div>

    </div>

    
  );
}

export default App;
