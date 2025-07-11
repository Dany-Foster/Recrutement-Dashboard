import { Box } from "@mui/material";
import BoutonMenu from "./BoutonMenu";
import SearchBar from "./SearchBar";

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

  return (
    <Box component="section" className="nav-items" onClick={handleClick}>
      <div className="nav-header">
        <div className="header">
          <img src={user?.logo} alt={user?.name} className="size-[30px]" />
          <article>
            <h2>{user?.name}</h2>
            <p>{user?.Email}</p>
          </article>
        </div>
        <img
          src="/assets/icons/arrow-down.svg"
          alt=""
          className=" size-4 cursor-pointer"
        />
      </div>
      <hr />
      <Box component="div" className="container pt-4">
        <SearchBar />
        <BoutonMenu />
      </Box>
    </Box>
  );
}
