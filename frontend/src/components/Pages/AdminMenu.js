import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Button } from "react-bootstrap";
import UserTable from "../UserTable";


function AdminMenu() {
  //add the useStates for active user being logged in and is an admin user here

  return (
    <div>
      <Navbar />
      <UserTable />
    </div>
  );
}

export default AdminMenu;