import { MdLogout } from "react-icons/md";
import { Box } from "@mui/material";
import { useState } from "react";
import BoutonMenu from "./BoutonMenu";
import SearchBar from "./SearchBar";
import AnimationMenuBar from "./AnimationBar";

export default function NavItems({
  handleClick,
}: {
  handleClick?: () => void;
}) {
  const user = {
    name: "Name Entreprise",
    Email: "Contact@gmail.com",
    logo: "/assets/icons/logo2.svg",
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box
      component="section"
      className="flex flex-col gap-[2px] h-full"
      onClick={handleClick}
    >
        <AnimationMenuBar>
        <div className="flex flex-row items-center gap-2.5">
          <img
            src={user?.logo}
            alt={user?.name}
            className="aspect-square size-[30px]"
          />
          <article className="flex flex-col justify-between !gap-[2px] max-w-full">
            <h2 className="text-xs md:text-[14px] font-bold text-dark-200 truncate">
              {user?.name}
            </h2>
            <p className="text-gray-500 text-xs md:text-[12px] font-normal truncate">
              {user?.Email}
            </p>
          </article>
        </div>
        </AnimationMenuBar>
      <hr className="bg-[#D9D9D9] size-[1.5px] border border-none w-full" />
      <Box
        component="div"
        className="flex flex-col justify-between gap-1 h-full pt-4"
      >
        <Box component="div" className="w-full flex flex-col">
          <SearchBar />
          <BoutonMenu />
        </Box>
        <footer className="border w-full py-2 px-6 rounded-md bg-[#586090] flex justify-between items-center gap-2 cursor-pointer">
          <h2 className="text-[14px] font-semibold text-white">
            Se déconnecter
          </h2>
          <button className="text-white">
            <MdLogout />
          </button>
        </footer>
      </Box>
    </Box>
  );
}
