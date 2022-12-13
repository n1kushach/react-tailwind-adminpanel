import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";

export const Home = (props) => {
  return (
    <div className="flex">
      <Sidebar
        sidebarClosed={props.sidebarClosed}
        setSidebarClosed={props.setSidebarClosed}
      />
      <Header />
    </div>
  );
};
