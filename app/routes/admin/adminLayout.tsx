import { Box } from "@mui/material";
import { MobileSidebar } from "components";
import NavItems from "components/NavItems";
import { Outlet } from "react-router";

const adminLayout = () => {
  return (
    <Box component="div" className="admin-layout">
      <MobileSidebar />
      <aside className="w-full max-w-[250px] hidden lg:block">
        <NavItems />
      </aside>
      <aside className="children">
        <Outlet />
      </aside>
    </Box>
  );
};

export default adminLayout;
