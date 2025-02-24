import { CustomFlowbiteTheme, Navbar } from "flowbite-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./data/MenuItems";
import { MenuItem } from "./types/MenuItems";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname || "/";
  const [isCollapsed, setIsCollapsed] = useState(false); // State to control collapse
  

  const navTheme: CustomFlowbiteTheme["navbar"] = {
    collapse: {
      base: "w-full md:block md:w-auto absolute !hover:text-[#3B4FA2] md:relative bg-white top-20 md:top-0 right-0 transition-all transition-transform duration-1000 ",
      list: "mt-4 flex flex-col !hover:text-[#3B4FA2] md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium ",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      active: {
        on: "font-bold !hover:text-[#3B4FA2] !text-[#3B4FA2] border-b-2 !border-[#3B4FA2] border-solid !focus:text-[#3B4FA2] ",
      },
    },
  };

  const handleLinkClick = () => {
    setIsCollapsed(false); // Hide the collapse on link click
  };

  return (
    // <div className="border-b-4">
    <div className="shadow-[0px_4px_10px_rgba(0,0,0,0.2)] sticky top-0 lg:top-2 z-[9999]">
      <Navbar
        theme={navTheme}
        fluid
        rounded
        className="sticky backdrop-blur-2xl z-50 !hover:text-[#3B4FA2] dark:border-[#3B4FA2] dark:bg-[#3B4FA2] sm:px-3 rounded  mx-auto top-2 px-2 py-0 "
      >
        <Navbar.Brand href="/" >
          <img
            src="./images/logo/dentallogo.svg"
            className="w-40  sm:w-56 md:w-36 lg:w-56 h-20 sm:h-24  ml-2 sm:ml-10 md:ml-0 lg:ml-0  max-490:h-16  max-490:w-32 "
            alt="Dental Hospital"
          />
          

        </Navbar.Brand>

        <div className="flex md:order-2 ml-0 md:-ml-12 !hover:text-[#3B4FA2] mr-2  lg:mr-2 mt-0 md:mt-5 lg:mt-0 ">
          <Navbar.Collapse
            className={`mt-3 ml-3 ${isCollapsed ? "block " : "hidden"} md:block`}
          >
            {menuItems.map((menu: MenuItem) => {
              return (
                <motion.div key={menu.path}>
                  <Navbar.Link
                    href={`${menu.path}`}
                    className="text-bold dark:text-[#3B4FA2] hover:text-[#3B4FA2] md:hover:text-[#3B4FA2]"
                    active={menu.path == currentPath}
                    onClick={handleLinkClick} // Call handleLinkClick on click
                  >
                    {menu.label}
                  </Navbar.Link>
                </motion.div>
              );
            })}
          </Navbar.Collapse>

          <Link
            to={{
              pathname: "/contact",
            }}
          >
            {/* <Button size="xs" className="bg-[#3B4FA2] mt-5 md:mt-3 dark:border-[#3B4FA2] dark:bg-[#3B4FA2] ms-2 lg:ms-5">Make Appointment</Button> */}

            <button type="button" className="group flex items-center justify-center p-[0.4rem] text-center font-medium relative focus:z-10 focus:outline-none text-white border border-transparent enabled:hover:[#3B4FA2] focus:[#3B4FA2] dark:enabled:hover:[#3B4FA2] dark:focus:[#3B4FA2] rounded-lg focus:ring-2 bg-[#3B4FA2] mt-0
             sm:mt-0 md:mt-0 lg:mt-0 dark:border-[#3B4FA2] dark:bg-[#3B4FA2] max-490:p-[0.5rem] ms-2  lg:ms-5"><span className="flex items-center transition-all duration-200 rounded-md text-xs sm:text-lg md:text-xs lg:text-lg px-2  py-1">Make Appointment</span></button>

          </Link>

          <Navbar.Toggle
            onClick={() => setIsCollapsed(!isCollapsed)} // Toggle collapse state
          />
        </div>
      </Navbar>
    </div>
  );
}
