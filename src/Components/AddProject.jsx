// src/components/AddProject.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import memberIcon from "../assets/Ellipse 3.png";
import spaceLogo from "../assets/Ellipse 4.png";
import vectorIcon from "../assets/Vector.png";

const AddProject = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    projectName: "",
    description: "",
    action: "Pipeline",
    startDate: "",
    endDate: "",
    comments: "",
  });

  // Generic change handler for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full h-full p-5">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigate(-1)}
                className="text-black font-normal text-xl"
              >
                <img src={vectorIcon} alt="Back" className="w-5 h-5" />
              </button>
              <label className="text-black font-normal text-2xl">
                Add Project
              </label>
            </div>
            <button
              onClick={() => navigate("/")}
              className="w-[149px] h-[48px] border border-blue-500 text-[#212121] rounded-[15px] font-normal text-[18px] leading-[24px]"
            >
              Add
            </button>
          </div>

          {/* Body */}
          <div className="p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Left Column */}
            <div className="flex flex-col items-center space-y-8">
              <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src={spaceLogo}
                  alt="Project logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="border border-[#CECECE] w-[180px] h-[48px] rounded-[25px] text-[18px] leading-[24px] font-normal text-[#747373]">
                Upload
              </button>
              <div>
                <label className="block text-lg font-normal text-[#747373] mb-2">
                  Actions*
                </label>
                <select
                  name="action"
                  value={form.action}
                  onChange={handleChange}
                  className="w-[200px] h-[40px] border border-[#CECECE] rounded-lg px-2"
                >
                  <option>Pipeline</option>
                  <option>On Hold</option>
                  <option>Completed</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-normal text-[#747373] mb-2">
                  Attachments
                </label>
                <button className="border border-[#CECECE] w-[200px] h-[40px] rounded-lg text-[#212121]">
                  Upload Attachments
                </button>
              </div>
              <div>
                <label className="block text-lg font-normal text-[#747373] mb-2">
                  Members
                </label>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full">
                    <img
                      src={memberIcon}
                      alt="member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full">
                    <img
                      src={memberIcon}
                      alt="member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="w-8 h-8 border rounded-full flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-4 w-full">
              {/* Project Name */}
              <div>
                <label className="block text-lg font-normal text-[#747373]">
                  Project Name*
                </label>
                <input
                  name="projectName"
                  type="text"
                  value={form.projectName}
                  onChange={handleChange}
                  className="w-[420px] h-[60px] border border-[#CECECE] rounded-lg px-3"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-lg font-normal text-[#747373]">
                  Description*
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-[600px] h-[180px] border border-[#CECECE] rounded-lg px-3 py-2"
                />
              </div>
              {/* Attachments */}

              {/* Dates */}
              <div className="flex space-x-4">
                <div>
                  <label className="block text-lg font-normal text-[#747373] mb-2">
                    Start Date*
                  </label>
                  <input
                    name="startDate"
                    type="date"
                    value={form.startDate}
                    onChange={handleChange}
                    className="w-[200px] h-[40px] border border-[#CECECE] rounded-lg px-2"
                  />
                </div>
                <div>
                  <label className="block text-lg font-normal text-[#747373] mb-2">
                    End Date*
                  </label>
                  <input
                    name="endDate"
                    type="date"
                    value={form.endDate}
                    onChange={handleChange}
                    className="w-[200px] h-[40px] border border-[#CECECE] rounded-lg px-2"
                  />
                </div>
              </div>

              {/* Comments */}
              <div>
                <label className="block text-lg font-normal text-[#747373] mb-2">
                  Comments
                </label>
                <textarea
                  name="comments"
                  value={form.comments}
                  onChange={handleChange}
                  className="w-full h-[100px] border border-[#CECECE] rounded-lg px-3 py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
