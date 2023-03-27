import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaTh, FaBars, FaUserAlt, FaAddressBook } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/form",
      name: "Book Appointment",
      icon: <FaUserAlt />,
      iconClosed: <FaAddressBook.RiArrowDawnSFill />,
      iconOpened: <FaAddressBook.RiArrowDawnSFill />,
      submenu: true,
      submenuItem: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div
            style={{ marginLeft: isOpen ? "110px" : "0px" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
              {item.submenu && isOpen && (
                <BsChevronDown
                  className={`${submenuOpen && "rotate-180"}`}
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                />
              )}

              {item.submenu && submenuOpen && isOpen && (
                <ul>
                  {item.submenuItem.map((submenuItem, index) => (
                    <li
                      key={index}
                      className=" text-sm items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-gray-50 rounded-md"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
