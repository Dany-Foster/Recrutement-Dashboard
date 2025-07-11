import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

const SearchBar = () => {
  return (
    <Box
      component="div"
      sx={{
        px: 1,
        py: 1,
        width: "100%",
        height: "30px",
        borderRadius: "5px",
        bgcolor: "#EBEDEE",
      }}
      className="flex items-center w-full gap-2.5 justify-content-between relative shadow-md cursor-pointer"
    >
      <SearchIcon
        fontSize="small"
        sx={{
          color: "#75767C",
        }}
      />
      <h3 className=" text-xs lg:text-[12px] text-[#75767C]">Search</h3>
      <Box
        component="div"
        className="p-2 bg-white h-[22px]  flex items-center rounded-sm absolute right-[10px] shadow-sm"
      >
        <h3 className="text-xs lg:text-[12px] font-semibold">Tab</h3>
      </Box>
    </Box>
  );
};

export default SearchBar;
