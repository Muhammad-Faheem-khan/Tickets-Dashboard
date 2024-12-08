import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="flex items-center px-6 py-4 justify-between bg-white shadow-sm">
      <h1 className="text-secondary self-start text-2xl">Overview</h1>
      <div className="flex items-center justify-between self-end">
        <div className="flex self-end">
          <button onClick={handleProfileClick}>
            <img
              width={40}
              height={40}
              className="mr-3 rounded-full contain"
              src="/assets/svgs/default-user.svg"
              alt="user"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
