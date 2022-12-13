import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="al self-start relative bottom-36 ml-10">
        ჟურნალი იუსტიცია
      </h1>
      <div className="bg bg-gray-300 w-1/3 flex flex-col justify-center items-center pt-16 pb-16">
        <h1>ავტორიზაცია</h1>
        <div className="inputs pt-14 flex flex-col gap-8">
          <div>
            <input
              className="p-3 rounded-lg text-xs"
              placeholder="მომხმარებელი"
            ></input>
          </div>
          <div>
            <input
              className="p-3 rounded-lg text-xs"
              placeholder="პაროლი"
            ></input>
          </div>
        </div>
        <div className="flex items-center justify-center pt-10">
          <button className="bg-sky-700 pt-3 pb-3 pl-5 pr-5 rounded-3xl text-white font-light text-sm">
            <Link to="/home">შესვლა</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
