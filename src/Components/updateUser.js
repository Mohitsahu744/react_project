import React, { useState } from "react";

export default function updateUser() {
  function updateUser(id) {

  }

  return (
    <div>
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
                Update Form
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
                    type="Email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="EmailHelp"
                  />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <div className="form-group">
                  <label>Phone no.</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                {/* <div className="form-group">
                  <label>DOB</label>
                  <input
                    type="Date"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div> */}
                <div className="input-group mt-2">
                  <div className="form-group">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect01"
                    >
                      Gender
                    </label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" placeholder="choose..">
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
                onClick={updateUser}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
