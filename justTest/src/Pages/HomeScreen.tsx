import React, { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

import img from "../assets/avatar.png";
import { useParams } from "react-router-dom";
import { viewOneProject } from "../api/projectAPI";
import ModelDisplay from "../Components/modelDisplay";
const HomeScreen = () => {
  const { projectID } = useParams();

  const [state, setState]: any = useState({});
  const [toggle, setToggle]: any = useState(false);

  useEffect(() => {
    viewOneProject(projectID).then((res) => {
      setState(res.data);
    });
  }, []);

  return (
    <div className="flex items-center flex-col">
      <div className="w-[1100px] h-[70px] bg-white flex items-center justify-around border-b">
        <h1 className="font-[400] text-[40px] text-[#D7A35F]">
          VRETHA TODO DASHBOARD
        </h1>
        <div className="w-[420px] flex ml-[50px]">
          <img src={img} alt="" className="w-[100px]" />
          <h6 className="font-[500] text-[12px] mt-[25px]">
            Over 20m Registered companies
          </h6>
        </div>
      </div>
      <div className="my-10 flex w-full justify-between items-center px-4">
        <div>
          <div>{state?.projectName}</div>
          <div>
            <div className="text-[16px] mt-[30px] px-4 shadow-md h-[60px] flex items-center justify-center hover:cursor-pointer ">
              <h4
                className="font-[600]"
                onClick={() => {
                  setToggle(true);
                }}
              >
                Add Task
              </h4>
            </div>

            {toggle && (
              <ModelDisplay
                setToggle={setToggle}
                project={false}
                projectID={projectID}
              />
            )}
          </div>
        </div>

        <div>
          <div>{state.budget}</div>
          <div>{state.budgetGivenOut}</div>
        </div>
      </div>
      <div className="flex">
        <div className="border w-[320px] h-[70vh] rounded-md shadow-md bg-white mt-[30px]">
          <div className="w-[100%] h-[40px] bg-[#80D5F1] font-[bold] flex items-center justify-center font-[700]  text-[#F6F1C8]">
            Start
          </div>
        </div>

        <div className="border w-[320px] h-[70vh] rounded-md shadow-md bg-white mt-[30px] ml-[20px] mr-[20px]">
          <div className="w-[100%] h-[40px] bg-[#F6F1C8] font-[bold] flex items-center justify-center font-[700] text-[#80D5F1]">
            Processing
          </div>
        </div>

        <div className="border w-[320px] h-[70vh] rounded-md shadow-md bg-white mt-[30px]">
          <div className="w-[100%] h-[40px] bg-[#D7A35F] font-[bold] flex items-center justify-center font-[700] text-[green]">
            Finished
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
