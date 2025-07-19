import { Box } from "@mui/material";
import { cn } from "lib/utils";
import { NavLink } from "react-router";
import { sidebarItems } from "~/constants";

const BoutonMenu = () => {
  return (
    <nav className="flex flex-col gap-3.5 pt-5">
      {sidebarItems.map(({ id, href, label, icon }) => (
        <NavLink to={href} key={id}>
          {({ isActive }: { isActive: Boolean }) => (
            <Box
              component="div"
              className={cn(
                "group flex items-center text-xs md:text-[14px] font-semibold cursor-pointer gap-2.5 py-[10px] px-3 rounded-lg text-dark-200 hover:bg-black hover:text-white hover:shadow-md",
                {
                  "bg-black !text-white shadow-lg": isActive,
                }
              )}
            >
              <img src={icon} alt={label} className="size-4" />
              {label}
            </Box>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default BoutonMenu;
