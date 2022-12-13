import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import { MenuItemComponent } from "../MenuItemComponent/MenuItemComponent";

export const Meniu = (props) => {
  return (
    <div className="flex">
      <Sidebar
        state={props.state}
        sidebarClosed={props.sidebarClosed}
        setSidebarClosed={props.setSidebarClosed}
      />
      <div className="w-full">
        <Header />
        <div className={props.state.editMenuModal ? "pl-16" : ""}>
          {/* CONTENT */}
          <MenuItemComponent
            state={props.state}
            info={props.info}
            setInfo={props.setInfo}
            addMenuModal={props.addMenuModal}
            setAddMenuModal={props.setAddMenuModal}
          />
        </div>
      </div>
    </div>
  );
};
