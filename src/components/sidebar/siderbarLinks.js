import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SiderbarLinks({ info }) {
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (path) => {
    return pathname.includes(path);
  };

  return (
    <Link
      className="mx-4 mt-6"
      to={info?.redirectTo}
      aria-label={`redirect to ${info.title}`}
    >
      <div
        className={`group relative flex flex-row px-2  md:py-2 py-1 items-center leading-tight border border-customgray-1 md:rounded-2xl rounded items-center leading-tight  hover:border-primary transition ${isActive(info.redirectTo) ? "active border border-primary bg-primary text-white" : "text-primary"} `}
      >
        <div className="group relative flex items-center">
          <img
            src={pathname.includes(info.redirectTo) ? info?.svgD : info?.svgL}
            alt={`sidebar icons ${info.title}`}
          />
          <span
            className="md:hidden block group-hover:opacity-100 transition-opacity bg-primary px-1 text-sm text-white rounded-md absolute top-0 left-[35px] 
                    opacity-0 "
          >
            {info.title}
          </span>
          <span className={`flex leading-tight md:ml-2 md:block hidden`}>
            {info?.title}
          </span>
        </div>
      </div>
    </Link>
  );
}
