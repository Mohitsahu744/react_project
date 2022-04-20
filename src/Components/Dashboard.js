import React, { useState } from "react";
import { useEffect } from "react";
// import validator from 'validator';
// import { useEffect } from "react";
import Swal from "sweetalert2";
const Dashboard = () => {
  const [user, setUser] = useState({
    First_name: "",
    Last_name: "",
    Email: "",
    Phone_no: "",
    Dob: "",
    Gender: "",
  });
  const [updateUser, setUpdateUser]=useState({
    First_name: "",
    Last_name: "",
    Email: "",
    Phone_no: "",
    Dob: "",
    Gender: "",
  })
  const [btn, setBtn] = useState(true);
  const [borderColor, setBorderColor] = useState("1px solid blue");

  function deleteUser() {
    Swal.fire("Delete Successfull...");
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    getuser();
  }, []);
  function getuser() {
    fetch("http://15.206.27.173:3002/api/all-data").then((result) => {
      result.json().then((res) => {
        // console.warn("result", res);
        setData(res.response);
      });
    });
  }
  // console.warn(data);

  function deletedataemp(id) {
    fetch(`http://15.206.27.173:3002/api/delete-data/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        // console.warn(res);
        deleteUser();
        getuser();
      });
    });
  }

  // function saveUser() {
  //   // insertData()
  //   if(!user.First_name || !user.Last_name || !user.Email || !user.Phone_no || !user.Dob || !user.Gender){

  //     insertData()

  //     Swal.fire("Enter all fields..");
  //   }
  //   else{
  //     Swal.fire("Added Successfull..");

  //   }

  // }

  const insertData = async () => {
    let { First_name, Last_name, Email, Phone_no, Dob, Gender } = user;
    // console.warn(user);

    let output = await fetch("http://15.206.27.173:3002/api/create-new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        First_name,
        Last_name,
        Email,
        Phone_no,
        Dob,
        Gender,
      }),
      // body : JSON.stringify(user),
    });
    const d = await output.json();

    if (
      !user.First_name ||
      !user.Last_name ||
      !user.Email ||
      !user.Phone_no ||
      !user.Dob ||
      !user.Gender
    ) {
      Swal.fire("Enter all fields..");
    } else {
      Swal.fire("Added Successfull..");
    }
    // console.log("output", d);
    getuser();
  };

  const handleEvent = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log("state",user)
    if (
      !user.First_name ||
      !user.Last_name ||
      !user.Email ||
      !user.Phone_no ||
      !user.Dob ||
      !user.Gender
    ) {
      setBtn(true);
      setBorderColor("1px solid");
    } else {
      setBtn(false);
    }
  };


  const handleEvent2 = (e) => {
    setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
    // console.log("state",user)
    console.log(updateUser)
  };
  // update phone no
  const updateBtnFunc = (items, i) => {
    console.log("updateBtnFunc", items);
    setUpdateUser(items)
  };

  // update user func
  const updateUserFunc=async(Id)=>{
    let Phone_no=updateUser.Phone_no
    console.log("eeeee",Phone_no)
    let output = await fetch(`http://15.206.27.173:3002/api/update-data/${Id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Phone_no
      }),
      // body : JSON.stringify(user),
    });
    const res=await output.json()
    console.log("updated response",res)
    getuser();
  }
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-dark my-5 ml-auto m-4 "
        data-toggle="modal"
        data-target="#addUser"
      >
        Add User
      </button>
      {/* Model */}
      <div
        className="modal fade"
        id="addUser"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addUserTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Registration
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="form-control" role="form" id="newModelForm">
                <div className="form-group">
                  <label htmlFor="First_name">First Name</label>
                  <input
                    style={{ border: borderColor }}
                    required={true}
                    value={user.First_name}
                    name="First_name"
                    onChange={handleEvent}
                    placeholder="mohit"
                    type="text"
                    className="form-control required error"
                    id="First_name"
                    aria-describedby="EmailHelp"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="Last_name">Last Name</label>
                  <input
                    value={user.Last_name}
                    style={{ border: borderColor }}
                    name="Last_name"
                    required
                    onChange={handleEvent}
                    placeholder="sahu"
                    type="text"
                    className="form-control"
                    id="Last_name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Email">Email</label>
                  <input
                    value={user.Email}
                    style={{ border: borderColor }}
                    onChange={handleEvent}
                    placeholder="xyz@gmail.com"
                    type="text"
                    name="Email"
                    className="form-control"
                    required
                    id="Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="Phone_no">Phone no.</label>
                  <input
                    value={user.Phone_no}
                    onChange={handleEvent}
                    style={{ border: borderColor }}
                    placeholder="1234567898"
                    name="Phone_no"
                    type="text"
                    required
                    className="form-control"
                    id="Phone_no"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="DOB">DOB</label>
                  <input
                    value={user.Dob}
                    onChange={handleEvent}
                    style={{ border: borderColor }}
                    placeholder="YYYY-MM-DD"
                    type="date"
                    required={true}
                    name="Dob"
                    className="form-control"
                    id="DOB"
                  />
                </div>
                <div className="input-group mt-2">
                  <div className="form-group">
                    <label className="input-group-text">Gender</label>
                  </div>
                  <select
                    value={user.Gender}
                    onChange={handleEvent}
                    style={{ border: borderColor }}
                    className="custom-select"
                    id="Gender"
                    name="Gender"
                  >
                    <option>Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
            <button
                type="button"
                className="btn btn-primary"
                onClick={insertData}
                data-dismiss="modal"
                disabled={btn}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>

              
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Gender</th>
              {/* <th scope="col">DOB</th> */}
              <th scope="col">Phone no.</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          {data.map((items, i) => (
            <>
              <tbody key={i}>
                <tr>
                  <th scope="row">{items.Id}</th>
                  <td>{items.First_name}</td>
                  <td>{items.Last_name}</td>
                  <td>{items.Gender}</td>
                  {/* <td>{items.DOB}</td> */}
                  <td>{items.Phone_no}</td>
                  <td>{items.Email}</td>
                  <td>
                    <button
                      data-toggle="modal"
                      data-target="#updateUser"
                      className="btn btn-dark"
                      onClick={() => updateBtnFunc(items, i)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deletedataemp(items.Id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
      {/* update */}
      {
        [updateUser].map((elem,i)=>{
          return <div
          key={i}
          className="modal fade"
          id="updateUser"
          tabIndex="-1"
          aria-labelledby="updateUserLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="updateUserLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form
                  key={i}
                  className="form-control"
                  role="form"
                  id="newModelForm"
                >
                  <div className="form-group">
                    <label htmlFor="First_name">First Name</label>
                    <input
                      style={{ border: borderColor }}
                      required={true}
                      value={elem.First_name}
                      name="First_name"
                      onChange={handleEvent}
                      placeholder="mohit"
                      type="text"
                      className="form-control required error"
                      id="First_name"
                      disabled={true}
                      aria-describedby="EmailHelp"
                    />
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="Last_name">Last Name</label>
                    <input
                      value={elem.Last_name}
                      style={{ border: borderColor }}
                      name="Last_name"
                      required
                      onChange={handleEvent}
                      placeholder="sahu"
                      type="text"
                      disabled={true}
                      className="form-control"
                      id="Last_name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input
                      value={elem.Email}
                      style={{ border: borderColor }}
                      onChange={handleEvent}
                      placeholder="xyz@gmail.com"
                      type="text"
                      name="Email"
                      className="form-control"
                      required
                      disabled={true}
                      id="Email"
                    />
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="Phone_no">Phone no.</label>
                    <input
                      value={elem.Phone_no}
                      onChange={handleEvent2}
                      style={{ border: borderColor }}
                      placeholder="1234567898"
                      name="Phone_no"
                      type="text"
                      required
                      className="form-control"
                      id="Phone_no"
                    />
                  </div>
              
                </form>
              </div>
              <div className="modal-footer">
              <button onClick={()=>updateUserFunc(elem.Id)} type="button" className="btn btn-primary">
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              
              </div>
            </div>
          </div>
        </div>
        })
      }
    </div>
  );
};

export default Dashboard;
