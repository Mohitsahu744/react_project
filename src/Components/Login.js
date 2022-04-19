import React, { useState, useEffect } from "react";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import Context from "./Context/context";
import image from "../images/image.svg"
export default function Login() {
  const navigate = useNavigate()
const a = useContext(Context)
console.log("Login",a)

  // const [user, setUser] = useState({
  //   name: "",
  //   password: "",
  // });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    console.log(value);
    a.setUser({ ...a.user, [name]: value });
  };

  const submitbtn = (e)=>{
     e.preventDefault();
     if(a.user.name==="mohit" && a.user.password==="12345"){
       navigate('/dashboard')
     }
     else{
       alert("invalid username or password");
     }
  }
  return (
    <div className="row container justify-content space-between" >
      <div className="col-12 col-md-7 col-lg-7" style={{marginTop:"12%",marginLeft:"5%"}}>
        <form>
          <div className="mb-2" >
            <label className="form-label">
              Name
            </label>
            <input
              name="name"
              value={a.user.name}
              type="name"
              className="form-control mt-4"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">
              Password
            </label>
            <input
              name="password"
              value={a.user.password}
              type="password"
              className="form-control mt-4"
              id="password"
              onChange={handleChange}
            />
          </div>

          <button onClick={submitbtn} type="submit" className="btn btn-primary m-2">
            Submit
          </button>
        </form>
      </div>
      <div className="col-12 col-md-4 col-lg-4 mt-2">
        <img style={{width:"100%",height:"500px"}}
       
          src={image}
        />
      </div>
    </div>
  );
}
