import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import memberIcon from "../assets/Ellipse 3.png";
import spaceLogo from "../assets/Ellipse 4.png";
import vectorIcon from "../assets/Vector.png";

const CreateSpaceCard = () => {
  const navigate = useNavigate();
  const [spaceName, setSpaceName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="w-full h-full p-5">
      <div className=" max-w-screen-xl mx-auto">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigate(-1)}
                className="text-black font-normal text-xl bg-white"
              >
                <img src={vectorIcon} alt="Back" className="w-5 h-5" />
              </button>
              <label className="text-black font-normal text-2xl">
                Create Space
              </label>
            </div>
            <button
              onClick={() => navigate("/")}
              className="w-[149px] h-[48px] border border-blue-500 text-[#212121] rounded-[15px] font-normal
              text-[18px] leading-[24px]"
            >
              Add
            </button>
          </div>
          <div className="p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex flex-col items-center space-y-8">
              <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src={spaceLogo}
                  alt="Space logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                className="border border-[#CECECE] w-[180px] h-[48px] rounded-[25px] text-[18px] 
              leading-[24px] font-normal text-[#747373]"
              >
                Upload
              </button>
              <div className="text-center">
                <label className="block text-[18px] font-normal mb-2 text-[#747373]">
                  Members
                </label>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full">
                    <img
                      src={memberIcon}
                      alt="member Icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full">
                    <img
                      src={memberIcon}
                      alt="member Icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="w-8 h-8 border rounded-full flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-4 w-full">
              <div>
                <label className="block text-lg font-normal text-[#747373] ">
                  Space Name*
                </label>
                <input
                  type="text"
                  value={spaceName}
                  onChange={(e) => setSpaceName(e.target.value)}
                  className="w-[420px] h-[60px] border border-[#CECECE] rounded-lg "
                />
              </div>
              <div>
                <label className="block text-lg font-normal text-[#747373] ">
                  Description*
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-[600px] h-[180px] border border-[#CECECE] rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSpaceCard;
