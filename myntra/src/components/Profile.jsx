import React, { useState } from "react";
import "./profile.css";
// import { Modal } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const formData = {
  name: "",
  email: "",
  phone: "",
  avtar: "",
  shipping: "",
};

const Profile = () => {
  const { user } = useAuth0();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let data = {};

    console.log(data);
  };

  return (
    <div className="profile">
      <div className="profileCon">
        <div className="profileImage">
          <img src={user.picture} alt="avatar" />
          <p>{user.email}</p>
        </div>
        <div className="profileDetails">
          <h3>Profile Details</h3>
          <div>
            <p>Full Name </p>
            <p>{user?.name ? user.name : "Not added"}</p>
          </div>
          <div>
            <p>Mobile Number</p>
            <p>{user?.mobile ? user.mobile : "Not added"}</p>
          </div>
          <div>
            <p>Email</p>
            <p>{user?.email}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{user?.gender ? user.gender : "Not added"}</p>
          </div>
          <div>
            <p>Shipping Details</p>
            <p>{"Not added"}</p>
          </div>

          <button type="button" style={myStyle}>
            Edit
          </button>
          <button type="button" style={myStyle}>
            save
          </button>
        </div>
      </div>
    </div>
  );
};

const myStyle = {
  padding: "10px 20px",
  margin: "10px",
  width: "auto",
  textTransform: "uppercase",
  background: "#fff",
  color: "#ff3f6c",
  fontWeight: "700",
  cursor: "pointer",
  border: "1px solid #ff3f6c",
  display: "inline-block",
};

export default Profile;
