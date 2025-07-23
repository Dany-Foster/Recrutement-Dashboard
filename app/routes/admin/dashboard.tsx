
import { Box, Paper, Table } from "@mui/material";
import MenuButton from "components/MenuButton";
import  Notification  from "components/Notifications";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbDeviceAnalytics } from "react-icons/tb";
import { GiDiploma } from "react-icons/gi";
import { PiReadCvLogoFill } from "react-icons/pi";
import RecrutmentChart from "components/ChartReact";
import CandidatChart from "components/RadialChart";
import { DataTable, ScrollContent, ToggleButtons } from "components";
import { NavLink } from "react-router";
import { Input } from '@base-ui-components/react/input';

const dashboard = () => {
  return (
    <Box component="main" sx={{ width: "100%" }}>
      <Container />
    </Box>
  );
};

export function Container(){
  return (
    <ScrollContent>
      <Box
        component="div"
        className="flex flex-col gap-2 px-4 sm:px-2 lg:px-4 pt-4 w-full mb-2 "
      >
        <Box component="div" className="">
          <h3 className="text-[18px] font-bold ">TABLEAU DE BORD</h3>
          <p className="text-[14px] font-semibold text-[#75767C]">
            Bienvenue sur votre tableau de bord, vous pouvez consulter vos
            candidatures, vos offres d'emploi et vos analyses.
          </p>
        </Box>
        <Box component="div" className="w-full flex lg:flex-row flex-col justify-between mt-4 pb-2">
          <Box component="section" className="flex flex-wrap lg:flex-row flex-col w-full lg:justify-center gap-[20px] items-center ">
            <CardInfo>
              <Box component="div" className="w-[40px] h-[40px] bg-[#586090] text-white text-[20px] rounded-md flex items-center justify-center">
                <HiMiniUserGroup />
              </Box>
              <Box component="div" className="flex flex-col gap-[4px]">
                <h3 className="text-[14px] font-semibold text-[#75767C]">Candidatures</h3>
                <p className="text-[18px] font-bold text-black">128</p>
              </Box>
            </CardInfo>
            <CardInfo>
              <Box component="div" className="w-[40px] h-[40px] bg-[#586090] text-white text-[20px] rounded-md flex items-center justify-center">
                <MdOutlineWorkOutline/>
              </Box>
              <Box component="div" className="flex gap-2">
                <Box component="div" className="flex flex-col gap-[2px]">
                  <h3 className="text-[14px] font-semibold text-[#75767C]">Poste</h3>
                  <p className="text-[14px] font-bold text-black">12</p>
                </Box>
                <Box component="div" className="flex flex-col gap-[2px]">
                  <h3 className="text-[14px] font-semibold text-[#75767C]">Ouvert</h3>
                  <p className="text-[14px] font-bold text-black">5</p>
                </Box>
                <Box component="div" className="flex flex-col gap-[2px]">
                  <h3 className="text-[14px] font-semibold text-[#75767C]">Pourvu</h3>
                  <p className="text-[14px] font-bold text-black">7</p>
                </Box>
              </Box>
            </CardInfo>
            <CardInfo>
              <Box component="div" className="w-[40px] h-[40px] bg-[#586090] text-white text-[20px] rounded-md flex items-center justify-center">
                <TbDeviceAnalytics />
              </Box>
              <Box component="div" className="flex flex-col gap-[4px]">
                <h3 className="text-[14px] font-semibold text-[#75767C]">Expérience moyenne</h3>
                <Box component="div" className="flex items-center gap-1">
                  <img src="/assets/icons/increment.svg" alt="" className="w-[25px]" />
                  <p className="text-[14px] font-bold text-black"> + 5 ans</p>
                </Box>
              </Box>
            </CardInfo>
            <CardInfo>
              <Box component="div" className="w-[40px] h-[40px] bg-[#586090] text-white text-[20px] rounded-md flex items-center justify-center">
                <GiDiploma />
              </Box>
              <Box component="div" className="flex flex-col gap-[2px]">
                <h3 className="text-[12px] font-semibold text-[#75767C]">Niveau d'études</h3>
                <Box component="div" className="flex gap-2">
                  <Box component="div" className="flex flex-col">
                    <p className="text-[12px] font-bold text-black">20 %</p>
                    <h3 className="text-[9px] font-bold text-[#75767C]">Bacc+5</h3>
                  </Box>
                  <Box component="div" className="flex flex-col">
                    <p className="text-[12px] font-bold text-black">35 %</p>
                    <h3 className="text-[9px] font-bold text-[#75767C]">Bacc+4</h3>
                  </Box>
                  <Box component="div" className="flex flex-col">
                    <p className="text-[12px] font-bold text-black">40 %</p>
                    <h3 className="text-[9px] font-bold text-[#75767C]">Bacc+3</h3>
                  </Box>
                  <Box component="div" className="flex flex-col">
                    <p className="text-[12px] font-bold text-black">5 %</p>
                    <h3 className="text-[9px] font-bold text-[#75767C]">Autres</h3>
                  </Box>
                </Box>
              </Box>
            </CardInfo>
            <CardInfo>
              <Box component="div" className="w-[40px] h-[40px] bg-[#586090] text-white text-[20px] rounded-md flex items-center justify-center">
                <PiReadCvLogoFill />
              </Box>
              <Box component="div" className="flex gap-2">
                <Box component="div" className="flex flex-col gap-[2px]">
                  <h3 className="text-[14px] font-semibold text-[#75767C]">Offres</h3>
                  <p className="text-[12px] font-bold text-black">12</p>
                </Box>
                <Box component="div" className="flex flex-col gap-[2px]">
                  <h3 className="text-[14px] font-semibold text-[#75767C]">Ouvert</h3>
                  <p className="text-[12px] font-bold text-black">5</p>
                </Box>
                <Box component="div" className="flex flex-col gap-[2px]">
                  <h3 className="text-[14px] font-semibold text-[#75767C]">Fermé</h3>
                  <p className="text-[12px] font-bold text-black">7</p>
                </Box>
              </Box>
            </CardInfo>
          </Box>
        </Box>
        <Box component="div" className="mt-4 flex lg:flex-row flex-col gap-[18px] lg:px-4">
          <Box component="div" className="max-w-full lg:w-[700px] bg-white rounded-md shadow-md p-4">
            <Box component="div" className="w-full  mt-2">
              <RecrutmentChart />
            </Box>
          </Box>
          <Box component="div" className="w-full lg:w-[calc(100%-700px)] bg-white rounded-md shadow-md p-4">
            <Box component="div" className="w-full  mt-2">
              <CandidatChart />
            </Box>
          </Box>
        </Box>
        <Box component="div" className="w-full mt-4 flex flex-col">
          <Box component="main" className="w-full lg:px-4 mt-4">
            <Paper elevation={2} className="w-full bg-white">
              <Box component="div" className="flex flex-col justify-arround gap-4 p-4">
                <Box component="div" className="">
                  <h3 className="text-[18px] font-bold ">Liste des candidats</h3>
                  <p className="text-[14px] font-normal text-[#75767C]">
                    Vous pouvez consulter la liste des candidats, leurs candidatures et
                    leurs offres d'emploi.
                  </p>
                </Box>
                <div className="w-full flex items-center justify-between ">
                  <ToggleButtons/>
                  <div className="flex items-center gap-2 ">
                    <Paper elevation={0} className="w-[300px] bg-[#F5F7F9] px-4 py-2  rounded-md border-1 border-[#75767C]">
                      <Input
                        type="text"
                        placeholder="Rechercher un candidat"
                        className="w-full outline-none text-[14px] text-[#000]  placeholder:text-[14px]"
                        value=""
                      />
                    </Paper>
                    <NavLink
                      to="/admin/candidatures"
                      className="text-[12px] m-auto font-bold border-1 bg-white border-[#3E3A7C] text-[#3E3A7C] px-4 py-2 rounded-md hover:bg-[#3E3A7C] hover:text-[#F5F7F9] flex items-center gap-2"
                    >
                       Ajouter un candidat
                    </NavLink>
                  </div>
                </div>
                {/* Here you can add a table or list to display candidates
                <p className="text-[14px] text-gray-600">Aucune candidature trouvée.</p> */}
                {/* Placeholder for candidates list */}
                <DataTable/>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </ScrollContent>
  );
}

export function CardInfo({children}: {children?: React.ReactNode}) {
  return (
    <Box component="div" className="flex items-center gap-[12px] w-full lg:w-[220px] h-[80px] bg-white rounded-md shadow-md px-3 py-1">
        {children}
    </Box>
  )
}

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




export default dashboard;
