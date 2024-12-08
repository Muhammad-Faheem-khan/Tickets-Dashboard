import { useState } from "react";
import SidebarMenu from "../sidebar/sidebarMenu";
import { Outlet } from "react-router-dom";
import Header from "../header";

export default function LayoutWrapper() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  return (
    <div className="flex flex-row h-screen overflow-hidden bg-[#F5F7FA] ">
      <SidebarMenu setIsSidebarExpanded={setIsSidebarExpanded} />
      <main
        className="flex-1"
        style={{ width: `calc(100vw - ${isSidebarExpanded ? "260" : "75"}px)` }}
      >
        <Header />
        <div className="h-full overflow-scroll px-6 pt-8 md:pb-[6rem]  pb-[70px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
