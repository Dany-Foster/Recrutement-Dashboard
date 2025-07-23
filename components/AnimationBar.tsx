import { Collapsible } from '@base-ui-components/react/collapsible';
import { Box } from '@mui/material';
import { cn } from 'lib/utils';
import { NavLink } from 'react-router';
import { Separator } from '@base-ui-components/react/separator';
import { IoSettings } from "react-icons/io5";
import { FaUserGear } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
export default function AnimationMenuBar({children}: {children: React.ReactNode}) {
  return (
    <Collapsible.Root className="flex w-full flex-col justify-center relative">
      <Collapsible.Trigger className="group flex items-center justify-between gap-2  rounded-sm  px-2 py-2 text-sm font-medium">
        {children}
        <ChevronIcon className="size-3 transition-all ease-out rotate-90 group-data-[panel-open]:rotate-270 cursor-pointer" />
      </Collapsible.Trigger> 
      <Collapsible.Panel className="absolute top-full shadow-lg w-full h-[var(--collapsible-panel-height)] flex flex-col justify-end  overflow-hidden text-sm transition-all ease-out data-[ending-style]:h-0 data-[starting-style]:h-0 z-2">
        <div className="mt-2 flex cursor-text flex-col gap-2 rounded-md shadow-md bg-white px-3 py-2 border-1 border-gray-200">
          <NavLink to="/Profil">{({ isActive }: { isActive: Boolean }) => (
            <Box
              component="div"
              className={cn(
                "group flex items-center text-xs md:text-[14px] font-semibold cursor-pointer gap-2.5 py-[10px] px-3 rounded-lg text-dark-200 hover:bg-[#586090] hover:text-white hover:shadow-md",
                {
                  "bg-[#586090] !text-white shadow-lg": isActive,
                }
              )}
            >
                <Box component="div" className='w-full flex items-center justify-between'>
                    <span>Profil</span> 
                    <FaUserGear />
                </Box>
            </Box>
          )}</NavLink>
          <NavLink to="/Paramètres">{({ isActive }: { isActive: Boolean }) => (
            <Box
              component="div"
              className={cn(
                "group flex items-center text-xs md:text-[14px] font-semibold cursor-pointer gap-2.5 py-[10px] px-3 rounded-lg text-dark-200 hover:bg-[#586090] hover:text-white hover:shadow-md",
                {
                  "bg-[#586090] !text-white shadow-lg": isActive,
                }
              )}
            >
                <Box component="div" className='w-full flex items-center justify-between'>
                    <span>Paramètres</span> 
                    <IoSettings />
                </Box>
            </Box>
          )}</NavLink>
            <Separator orientation="vertical" className="h-px bg-gray-200" />
            <NavLink to="/Deconnexion">{({ isActive }: { isActive: Boolean }) => (
            <Box
              component="div"
              className={cn(
                "group flex items-center text-xs md:text-[14px] font-semibold cursor-pointer gap-2.5 py-[10px] px-3 rounded-lg text-dark-200 hover:bg-[#586090] hover:text-white hover:shadow-md",
                {
                  "bg-[#586090] !text-white shadow-lg": isActive,
                }
              )}
            >
                <Box component="div" className='w-full flex items-center justify-between'>
                    <span>Se déconnecter</span> 
                    <MdLogout />
                </Box>
            </Box>
          )}</NavLink>

        </div>         
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}

export function ChevronIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <path d="M3.5 9L7.5 5L3.5 1" stroke="currentcolor" />
    </svg>
  );
}