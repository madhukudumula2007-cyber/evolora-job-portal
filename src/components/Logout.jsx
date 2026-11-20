
import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged Out Successfully!");
    navigate("/login");
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
