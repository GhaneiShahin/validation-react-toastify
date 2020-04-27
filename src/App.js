import React, { Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";

import "./App.css";

const App = () => {
  const loginMsg = () => toast.success("Logged in successfully!!");
  const deleteMsg = () => toast.error("Deleted successfully!!");


  return (
    <Fragment>
      <ToastContainer />
      <div className="div">
        <button className="btn1" onClick={loginMsg}>Login</button>
      </div>
      <div className="div">
        <button className="btn2" onClick={deleteMsg}>Delete</button>
      </div>
    </Fragment>
  );
};

export default App;
