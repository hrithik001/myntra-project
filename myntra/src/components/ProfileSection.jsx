import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  console.log(user);
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={styles.profileContainer}>
      <div className="action_container" onMouseEnter={handleHover}>
        <FaCircleUser />
        <span className="action_name">Profile</span>
      </div>
      {isHovered &&
        (isAuthenticated ? (
          <div
            style={styles.card}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <p style={styles.title}>
              <b>{user.name} </b>
            </p>
            <p>{user.email}</p>
            <hr />
            <p>Orders</p>
            <p>
              <Link
                to={"/wishlist"}
                style={{ textDecoration: "none", color: "black !important" }}
              >
                WishList
              </Link>
            </p>
            <p>Gift Cards</p>
            <p>Contact us</p>
            <p>Myntra Insider</p>
            <hr />
            <p>Myntra Credit</p>
            <p>Coupons</p>
            <p>Saved Cards</p>
            <p>Saved VPA</p>
            <p>Saved Address</p>
            <hr />
            <p>Edit Profile</p>
            <p
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </p>
          </div>
        ) : (
          <div
            style={styles.card}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <p>
              <b>Welcome</b>
            </p>
            <p>To access account and manage order</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link>
                <button
                  type="button"
                  style={styles.myStyle}
                  onClick={() => loginWithRedirect()}
                >
                  LogIn
                </button>
              </Link>
            </div>
            <hr />

            <p>Orders</p>
            <p>
              <Link to={"/wishlist"} style={{ textDecoration: "none" }}>
                WishList
              </Link>
            </p>
            <p>Gift Cards</p>
            <p>Contact us</p>
            <p>Myntra Insider</p>
            <hr />
            <p>Myntra Credit</p>
            <p>Coupons</p>
            <p>Saved Cards</p>
            <p>Saved VPA</p>
            <p>Saved Address</p>
          </div>
        ))}
    </div>
  );
};

const styles = {
  profileContainer: {
    position: "relative",
    display: "inline-block",
    zIndex: "1",
  },
  profileLogo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    cursor: "pointer",
  },
  card: {
    width: "250px",
    left: "-137px",
    top: "63px",
    position: "absolute",
    padding: "25px 20px 15px",
    zIndex: "9",
    backgroundColor: "white",
    color: "black",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Add box shadow here
  },
  myStyle: {
    padding: "10px 20px",
    width: "auto",
    textTransform: "uppercase",
    background: "#fff",
    color: "#ff3f6c",

    fontWeight: "700",
    cursor: "pointer",
    border: "1px solid #ff3f6c",
    display: "inline-block",
  },
};

export default ProfileSection;
