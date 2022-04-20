import React from "react";
import { useContext } from "react";
import Context from "./Context/context";
import {useNavigate} from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
    const a = useContext(Context)
    const logoutBtn=()=>{
      navigate("/")
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" >{a.user.name}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          

        <button onClick={logoutBtn} className="btn btn-outline-success " type="submit">Logout</button>
        </ul>
       
      </div>
    </div>
  </nav>
  
  );
}



// <nav style={{width:"100%"}} className="navbar navbar-light bg-dark ">
// <div className="row"></div>
// <span className="navbar-brand mb-0 m-2 h1" style={{color:"white"}}>{a.user.name}</span>
// <span className="navbar-brand  " style={{marginRight:"5%"}}><i style={{fontSize:"35px",color:"white"}} className="bi bi-person-circle"></i> <button className="btn btn-secondary m-2">Logout</button></span>

// </nav>