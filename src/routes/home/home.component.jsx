// import "./categories.styles.scss";
// import React from "react";
// import React from "react";
import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
const Home = () => {
  // For dynamic display of four categoires instead of hard coding of div sections

  return (
    <div>
      <Directory />
      <Outlet />
      {/* <Directory /> */}
    </div>
  );
};

export default Home;
