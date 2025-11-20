import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = ({ title = "Inicio", user }) => {
  return (
    <header className="
      w-full 
      flex items-center justify-between 
      px-8 py-6 
      bg-white
    ">
      
      {/* LEFT – PAGE TITLE */}
      <h1 className="
        font-outfit 
        text-[1.9rem] 
        font-semibold 
        text-[var(--color-violet_blue)]
      ">
        {title}
      </h1>

      {/* RIGHT – USER INFO */}
      <div className="flex items-center gap-6">
        
        {/* Notification icon */}
        <button className="
          w-10 h-10 
          rounded-full 
          flex items-center justify-center
          hover:bg-gray-100 transition
          text-[var(--color-violet_blue)]
        ">
          <IoNotificationsOutline size={22} />
        </button>

        {/* USER INFO */}
        <div className="flex items-center gap-3 p-2 px-3 rounded-full hover:bg-gray-100 cursor-pointer transition">
          <img
            src={user?.avatar}
            alt="user"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-[var(--color-texto_principal)]">
              {user?.name}
            </span>
            <span className="text-xs text-[var(--color-texto_secundario)]">
              {user?.role}
            </span>
          </div>

          {/* Arrow */}
          <span className="text-[var(--color-violet_blue)] text-lg">▾</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
