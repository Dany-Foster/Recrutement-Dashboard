import { Box } from "@mui/material";
import { cn } from "lib/utils";
import { NavLink } from "react-router";
import { sidebarItems } from "~/constants";

const BoutonMenu = () => {
  return (
    <nav>
      {sidebarItems.map(({ id, href, label, icon }) => (
        <NavLink to={href} key={id}>
          {({ isActive }: { isActive: Boolean }) => (
            <Box
              component="div"
              className={cn("group nav-item", {
                "bg-[#EBEDEE] !text-black shadow-md": isActive,
              })}
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
