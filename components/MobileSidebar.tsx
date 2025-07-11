import { Box, ClickAwayListener, Drawer } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router";
import NavItems from "./NavItems";

const styles = `
  @keyframes open-animation {
    0% {
      opacity: 0;
      transform: translateX(-270px);
    }

    50% {
      opacity: 1;
      transform: translateX(-150px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes close-animation {
    0% {
      opacity: 1;
      transform: translateX(0);
    }

    100% {
      opacity: 0;
      transform: translateX(-270px);
    }
  }

  .anim-open {
    animation: open-animation 0.2s ease-out both;
  }

  .anim-close {
    animation: close-animation 0.4s ease-out forwards;
  }
`;

const MobileSidebar = () => {
  const [Open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
  // const { children, ...other } = props;

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box component="div" className="mobile-sidebar wrapper relative">
        <Box component="div">
          <header>
            <Link to="/">
              <img
                src="assets/icons/logo2.svg"
                alt="logo"
                className="size-[30px]"
              />
              <h1>Talvisio</h1>
            </Link>
            <button onClick={handleClick}>
              <img
                src="assets/icons/menu.svg"
                alt="menu"
                className="size-7 cursor-pointer"
              />
            </button>
          </header>
        </Box>

        <Drawer anchor="left" open={Open} onClose={handleClick}>
          <Box component="aside" className=" w-[270px] h-screen p-4">
            <NavItems handleClick={handleClick} />
          </Box>
        </Drawer>
      </Box>
    </ClickAwayListener>
  );
};

export default MobileSidebar;
