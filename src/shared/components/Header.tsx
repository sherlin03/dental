import  { useState } from "react";
import { Button, CustomFlowbiteTheme, Navbar } from "flowbite-react";
import { menuItems } from "./data/MenuItems";
import { MenuItem } from "./types/MenuItems";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname || "/";
  const [isCollapsed, setIsCollapsed] = useState(false); // State to control collapse

  const navTheme: CustomFlowbiteTheme["navbar"] = {
    collapse: {
      base: "w-full md:block md:w-auto absolute md:relative bg-white top-20 md:top-0 right-0 transition-all transition-transform duration-1000 ",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      active: {
        on: "font-bold !text-[rgba(59,79,162,1)] !border-b-2 !border-[rgba(59,79,162,1)] border-solid  ",
      },
    },
  };

  const handleLinkClick = () => {
    setIsCollapsed(false); // Hide the collapse on link click
  };

  return (
    <div className="border-b-4">
      <Navbar
        theme={navTheme}
        fluid
        rounded
        className="sticky backdrop-blur-2xl z-50 dark:border-[#3B4FA2] dark:bg-[#3B4FA2] sm:px-4 rounded container mx-auto top-2 px-2 py-2"
      >
        <Navbar.Brand href="/">
          <img
            src="images/logo/dentallogo.svg"
            className="w-32 sm:w-36 h-16 sm:h-16"
            alt="Dental Hospital"
          />
        </Navbar.Brand>

        <div className="flex md:order-2">
          <Navbar.Collapse
            className={`mt-3 ${isCollapsed ? "block" : "hidden"} md:block`}
          >
            {menuItems.map((menu: MenuItem) => {
              return (
                <motion.div key={menu.path}>
                  <Navbar.Link
                    href={`${menu.path}`}
                    className="text-bold"
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
            <Button className="bg-[#3B4FA2] ms-2">Make Appointment</Button>
          </Link>

          <Navbar.Toggle
            onClick={() => setIsCollapsed(!isCollapsed)} // Toggle collapse state
          />
        </div>
      </Navbar>
    </div>
  );
}
