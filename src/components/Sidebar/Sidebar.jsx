import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import VectorLeft from "../../assets/VectorLeft.svg";
import VectorDown from "../../assets/VectorDown.svg";
import Siaxleebi from "../../assets/Siaxleebi.svg";
import Saredakcio from "../../assets/Saredakcio.svg";
import Parametrebi from "../../assets/Parametrebi.svg";
import Momxmareblebi from "../../assets/Momxmareblebi.svg";
import Menu from "../../assets/Menu.svg";
import Jurnali from "../../assets/Jurnali.svg";

export const Sidebar = (props) => {

  const handleMenuClick = () => {
    props.setAddMenuModal(!props.addMenuModal);
  }

  return (
    <div
      className={
        props.sidebarClosed == false
          ? "w-96 fixed h-screen customBorderRight"
          : "w-20 fixed h-screen customBorderRight"
      }
    >
      <div className="top flex flex-row justify-around pt-5">
        <h1 className={props.sidebarClosed == false ? "" : "hidden"}>
          ჟურნალი იუსტიცია
        </h1>
        <img
          className="cursor-pointer"
          onClick={() => {
            props.setSidebarClosed(!props.sidebarClosed);
            console.log(props.sidebarClosed);
          }}
          src={VectorLeft}
        ></img>
      </div>
      <div className="nav-menu flex justify-center pt-10">
        <ul>
          <Link to="/menu" onClick={handleMenuClick}>
            <li className="flex flex-row items-center h-14 gap-4">
              <img src={Menu}></img>
              <a className={props.sidebarClosed == false ? "" : "hidden"}>
                მენიუ
              </a>
            </li>
          </Link>
          <Link to="/saredakcio">
            <li className="flex flex-row items-center h-14 gap-4">
              <img src={Saredakcio}></img>
              <a className={props.sidebarClosed == false ? "" : "hidden"}>
                სარედაქციო კოლეგია
              </a>
            </li>
          </Link>
          <Link to="/jurnali">
            <li className="flex flex-row items-center h-14 gap-4">
              <img src={Jurnali}></img>
              <a className={props.sidebarClosed == false ? "" : "hidden"}>
                ჟურნალი
              </a>
            </li>
          </Link>
          <Link to="/siaxleebi">
            <li className="flex flex-row items-center h-14 gap-4">
              <img src={Siaxleebi}></img>
              <a className={props.sidebarClosed == false ? "" : "hidden"}>
                სიახლეები
              </a>
            </li>
          </Link>
          <Link to="/momxmareblebi">
            <li className="flex flex-row items-center h-14 gap-4">
              <img src={Momxmareblebi}></img>
              <a className={props.sidebarClosed == false ? "" : "hidden"}>
                მომხმარებლები
              </a>
            </li>
          </Link>
          <Link to="/parametrebi">
            <li className="flex flex-row items-center h-14 gap-4">
              <img src={Parametrebi}></img>
              <a className={props.sidebarClosed == false ? "" : "hidden"}>
                პარამეტრები
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
