import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {

  let navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/logout');
    document.cookie = "user_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate(-1, {replace: true});
  }, [navigate]);

  return(
    <></>
  );

}

export default Logout;
