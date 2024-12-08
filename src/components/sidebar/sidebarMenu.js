import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SiderbarLinks from "./siderbarLinks";
import { sidebarLinksData } from "../../utils/constants";

function SidebarMenu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div
        className={`sticky top-0 h-screen z-[200] sidebar  md:sidebar-expanded sidebar-collapsed bg-white shadow-sm`}
        style={{ maxHeight: "calc(100vh)" }}
      >
        <div
          className={`sidebar-inner flex flex-shrink-0 flex-col h-screen justify-between px-0 py-6 text-base bg-white  text-carbon-800 font-medium md:w-[230px] w-[75px] `}
          style={{ maxHeight: "calc(100vh - 20px)" }}
        >
          <div className="flex flex-col">
            <div className="flex justify-center pb-4">
              <Link
                href="/dashboard"
                className="logo flex justify-center  px-2 -mr-2 -ml-2 z-[300] cursor-pointer"
                aria-label="back to dashboard"
              >
                <img src="/assets/images/logo.png" width={130} alt="logo" />
              </Link>
            </div>
            {sidebarLinksData.map((linkData) => (
              <SiderbarLinks info={linkData} key={linkData.redirectTo} />
            ))}
          </div>

          <div className="mx-4 mt-6 flex flex-col items-center cursor-pointer">
            <div
              className={`flex flex-row w-full  px-2 py-2 items-center leading-tight border border-customgray-1 md:rounded-2xl rounded items-center leading-tight bg-white hover:border-primary transition `}
              onClick={handleLogout}
            >
              <img src="/assets/svgs/logout.svg" alt="logout" />
              <span className="flex leading-tight text-primary md:ml-2 md:block hidden">
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarMenu;
