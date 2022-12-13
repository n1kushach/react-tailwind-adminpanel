import "./MenuItemComponent.css";
import { DragDrop } from "../DragDrop/DragDrop";
import { FormComponent } from "../FormComponent/FormComponent";
import { FormEditComponent } from "../FormEditComponent/FormEditComponent";

export const MenuItemComponent = (props) => {
  const toggleModal = () => {
    props.setAddMenuModal(!props.addMenuModal);
  };

  const toggleEditMenuModal = () => {
    props.state.setEditMenuModal(!props.state.editMenuModal);
  };




  return (
    <div className={props.state.sidebarClosed ? "w-full pl-4" : "w-full pl-80"}>
      <div className={props.state.editMenuModal == false ? "hidden" : "pl-20 w-full bg-gray-100"}>
        <FormEditComponent state={props.state} toggleEditMenuModal={toggleEditMenuModal}/>
      </div>
      
      <div
        className={
          props.addMenuModal == true ? "modal w-full pl-16" : "modal w-full hidden pl-16"
        }
      >
        <div className="overlay bg-gray-100">
          <div className="modal-content p-3 pl-20 pr-20">
            <FormComponent
              state={props.state}
              info={props.info}
              setInfo={props.setInfo}
              toggleModal={toggleModal}
            />
          </div>
        </div>
      </div>
      <div
        className={
          props.addMenuModal || props.state.editMenuModal == true
            ? "top flex-row justify-between pl-20 pr-20 mt-10 hidden"
            : "top flex flex-row justify-between pl-20 pr-20 mt-10"
        }
      >
        <button
          onClick={toggleModal}
          className="bg-sky-700 p-3 rounded-lg text-white"
        >
          მენიუს დამატება
        </button>
        <input
          className="p-3 bg-gray-200 rounded-lg"
          placeholder="ძიება"
        ></input>
      </div>
      <div className={props.addMenuModal || props.state.editMenuModal == true ? "hidden" : ""}>
        <h2 className="tex text-md pl-20 mt-10">სულ 52 ჩანაწერი</h2>
        <div className='bottom flex flex-col justify-center pl-20 pr-20 mt-10 [&>*:nth-child(odd)]:bg-gray-100 [&>*:nth-child(even)]:bg-gray-200"'>
          {props.info.map((item, key) => {
            return (
              <DragDrop
                toggleModal={toggleModal}
                state={props.state}
                id={item.id}
                key={key}
                title={item.title}
                menu={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
