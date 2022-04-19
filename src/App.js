import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import State from "./Components/Context/state";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <State>
      <Navbar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Login />}/>
      </Routes>
      </State>
    </div>
  );
}

export default App;
