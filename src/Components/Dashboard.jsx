import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import DummyData from "../utils/DummyData";

const Dashboard = () => {
  const [expandedProjects, setExpandedProjects] = useState([]);

  const toggleExpand = (projectId) => {
    setExpandedProjects(
      (prev) =>
        prev.includes(projectId)
          ? prev.filter((id) => id !== projectId) // collapse
          : [...prev, projectId] // expand
    );
  };
  return (
    <div className="p-5 w-full h-full">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="w-[6rem] p-1 flex items-center gap-2 bg-white">
            <p className="text-sm">Status</p>
            <div className="flex items-center gap-2">
              <p>All</p>
              <MdKeyboardArrowDown />
            </div>
          </div>

          <div className="w-[6rem] p-1 flex items-center gap-2 bg-white">
            <p className="text-sm">Sort</p>
            <div className="flex items-center gap-2">
              <p>A-Z</p>
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 w-28 bg-white border-2 border-gray-200">
          <div className="border-r-2 border-gray-200">
            <GoPlus size={25} />
          </div>
          <p className="text-sm">Add Project</p>
        </div>
      </div>

      <div className="w-full h-full mt-3">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead>
            <tr className="bg-white">
              <th className="text-left text-gray-500 px-4 py-2">
                Project Name
              </th>
              <th className="text-left text-gray-500 px-4 py-2">Task</th>
              <th className="text-left text-gray-500 px-4 py-2">Status</th>
              <th className="text-left text-gray-500 px-4 py-2">Members</th>
            </tr>
          </thead>

          <tbody>
            {DummyData.map((project) => (
              <React.Fragment key={project.id}>
                {/* 🟦 Project Row with Gray Background */}
                <tr
                  className="cursor-pointer bg-gray-100 hover:bg-gray-200"
                  onClick={() => toggleExpand(project.id)}
                >
                  <td className="px-4 py-3 font-semibold text-gray-800">
                    {project.projectName}
                  </td>
                  <td className="px-4 py-3">
                    {project.tasksCompleted}/{project.totalTasks}
                  </td>
                  <td className="px-4 py-3">{project.status}</td>
                  <td className="px-4 py-3 space-x-2">
                    {project.members.map((member) => (
                      <span
                        key={member}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {member}
                      </span>
                    ))}
                  </td>
                </tr>

                {/* 🟨 Sub-Task Rows with Indentation and Member Tags */}
                {expandedProjects.includes(project.id) &&
                  project.subTasks.map((task) => (
                    <tr key={task.id} className="bg-white text-gray-700">
                      <td className="px-8 py-2 text-sm text-gray-600">
                        ↳ {task.name}
                      </td>
                      <td className="px-4 py-2 text-sm">
                        {task.completedTasks}/{task.totalTasks}
                      </td>
                      <td className="px-4 py-2 text-sm">{task.status}</td>
                      <td className="px-4 py-2 space-x-2">
                        {task.members?.map((member) => (
                          <span
                            key={member}
                            className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                          >
                            {member}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
