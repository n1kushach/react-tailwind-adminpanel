import React from "react";
import del from "../../assets/DragDropIcons/del.svg";
import edit from "../../assets/DragDropIcons/edit.svg";
import favorite from "../../assets/DragDropIcons/favorite.svg";
import hide from "../../assets/DragDropIcons/hide.svg";
import redirect from "../../assets/DragDropIcons/redirect.svg";

export const DragDrop = (props) => {
  const handleDelete = (id) => {
    props.state.setInfo(props.state.info.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    props.state.setId(id);
    props.state.setEditMenuModal(true);
    console.log(props.state.id);
  };

  return (
    <div
      className="flex flex-row items-center justify-between p-4 w-full"
      draggable
    >
      <h2>{props.title}</h2>
      <div className="flex flex-row gap-1 items-center">
        <p className={props.menu == true ? "hidden" : ""}>{props.date}</p>
        <img onClick={() => handleEdit(props.id)} src={edit}></img>
        <img src={hide}></img>
        {/* for menu page you should pass props "menu" = True to hide favorite/redirect icons, for news page leave it blank */}
        <img
          className={props.menu == true ? "hidden" : ""}
          src={favorite}
        ></img>
        <img
          className={props.menu == true ? "hidden" : ""}
          src={redirect}
        ></img>
        <img onClick={() => handleDelete(props.id)} src={del}></img>
      </div>
    </div>
  );
};
