import React, { useState } from "react";
import { useEffect } from "react";
// import { useEffect } from "react";
import Swal from "sweetalert2";
const Dashboard = () => {
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
        console.warn("result", res);
        setData(res.response);
      });
    });
  }
  console.warn(data);

  function deletedataemp(id) {
    fetch(`http://15.206.27.173:3002/api/delete-data/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
        deleteUser();
        getuser();
      });
    });
  }

  const [First_name, setfname] = useState("");
  const [Last_name, setlname] = useState("");
  const [Email, setemail] = useState("");
  const [Phone_no, setphone] = useState("");
  const [Dob, setdob] = useState("");
  const [Gender, setgender] = useState("");

  function saveUser() {
    insertData();
    if(!First_name || !Last_name || !Email || !Phone_no || !Dob || !Gender){
      Swal.fire("Enter all the fields...");
    }
    else{
      Swal.fire("Added Successfull...");
    }
  }

  async function insertData() {
    let data = { First_name, Last_name, Email, Phone_no, Dob, Gender };
    // console.warn(data);

    let output = await fetch("http://15.206.27.173:3002/api/create_new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const d = await output.json();

    console.log("output", d);
    getuser();
  }
  return (
    <div>
      <button 
        type="button"
        className="btn btn-outline-dark my-5 ml-auto m-4 "
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Add User
      </button>
      {/* Model */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
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
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                  required
                    value={First_name}
                    onChange={(e) => setfname(e.target.value)}
                    placeholder="mohit"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="EmailHelp"
                  />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    value={Last_name}
                    required
                    onChange={(e) => setlname(e.target.value)}
                    placeholder="sahu"
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={Email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder="xyz@gmail.com"
                    type="text"
                    className="form-control"
                    required
                    id="exampleInputPassword1"
                  />
                </div>

                <div className="form-group">
                  <label>Phone no.</label>
                  <input
                    value={Phone_no}
                    onChange={(e) => setphone(e.target.value)}
                    placeholder="1234567898"
                    type="text"
                    required
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label>DOB</label>
                  <input
                    value={Dob}
                    onChange={(e) => setdob(e.target.value)}
                    placeholder="YYYY-MM-DD"
                    type="date"
                    required={true}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="input-group mt-2">
                  <div className="form-group">
                    <label className="input-group-text">Gender</label>
                  </div>
                  <select
                    value={Gender}
                    onChange={(e) => setgender(e.target.value)}
                    className="custom-select"
                    id="inputGroupSelect01"
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
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancle
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={saveUser}
                data-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {" "}
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
                  {/* <button
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    className="btn btn-dark"
                  >
                    Update
                  </button> */}
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
          ))}
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
