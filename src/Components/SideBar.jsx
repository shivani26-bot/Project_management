import React from "react";
import { Link, useLocation } from "react-router-dom";
import dashboardIcon from "../assets/dashboard.png";
import spacesIcon    from "../assets/spaces.png";
import projectsIcon  from "../assets/projects.png";
import tasksIcon     from "../assets/tasks.png";
import settingsIcon  from "../assets/settings.png";

const SideBar = () => {
  const { pathname } = useLocation();
  const links = [
    { name: "Dashboard", icon: dashboardIcon },
    { name: "Spaces",    icon: spacesIcon },
    { name: "Projects",  icon: projectsIcon },
    { name: "Tasks",     icon: tasksIcon },
  ];

  return (
    <div className="w-64 h-[100vh] pt-16 bg-white border-r shadow-sm flex flex-col">
      <nav className="flex-1 flex flex-col gap-2 px-4 py-6">
        {links.map(({ name, icon }) => {
          const to = `/${name.toLowerCase()}`;
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center h-10 pl-4 gap-3 rounded-lg text-sm font-medium ${
                active
                  ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <img src={icon} alt={`${name} icon`} className="w-5 h-5" />
              {name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t">
        <Link
          to="/settings"
          className={`flex items-center h-10 pl-4 gap-3 rounded-lg text-sm font-medium w-full ${
            pathname === "/settings"
              ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <img src={settingsIcon} alt="Settings icon" className="w-5 h-5" />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
