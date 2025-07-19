import { Box } from "@mui/material";
import { MobileSidebar } from "components";
import NavItems from "components/NavItems";
import { Outlet } from "react-router";

const adminLayout = () => {
  return (
    <Box component="div" className="flex flex-col lg:flex-row h-screen w-full">
      <MobileSidebar />
      <aside className="w-full max-w-[250px] hidden lg:block p-4 bg-white shadow-md">
        <NavItems />
      </aside>
      <aside className="w-full h-full !bg-[#F5F7F9] pt-4 lg:pt-2 px-4 py-3">
        <Outlet />
      </aside>
    </Box>
  );
};

export default adminLayout;
