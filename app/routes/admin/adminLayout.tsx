import { Box } from "@mui/material";
import { MenuButton, MobileSidebar, Notification } from "components";
import NavItems from "components/NavItems";
import { Outlet } from "react-router";

const adminLayout = () => {
  return (
    <Box component="div" className="flex flex-col lg:flex-row h-screen w-full">
      <MobileSidebar />
      <aside className="w-full max-w-[250px] hidden lg:block p-4 bg-white shadow-md">
        <NavItems />
      </aside>
      <aside className="w-full  lg:max-w-[calc(100%-250px)] h-full !bg-[#F5F7F9] pt-4 lg:pt-2 px-4 py-2">
        <Headerdashboard />
        <Outlet />
      </aside>
    </Box>
  );
};


export function Headerdashboard() {
  return (
    <Box
      component="header"
      className="px-4 py-2 lg:px-5 lg:py-2 w-full bg-white flex items-center shadow-lg rounded-md justify-between z-100"
    >
      <Box component="div" className="flex flex-col gap-1">
        <h3 className="text-[14px] font-semibold ">Bienvenue UserName</h3>
        <p className="text-[12px] font-normal text-[#75767C]">
          Lundi, Juillet 3, 2025
        </p>
      </Box>
      <Box component="div" className="flex gap-2.5">
        <MenuButton />
        <Notification />
      </Box>
    </Box>
  );
}

export default adminLayout;
