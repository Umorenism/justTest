import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <div className="w-full bg-white-400 min-h-[90vh]  justify-center flex items-center">
      <div className="border w-[400px] shadow-md bg-slate-50 h-[90%] pb-10">
        <div className=" text-[41px] mb-10 h-[100px] bg-green-700 flex items-center justify-center text-[white]">
          Fremo
        </div>
        <div className="w-full justify-center flex mb-20">
          <center className="w-[60%] text-center  flex items-center justify-center text-[grey] mt-3">
            Team up with your colleaques around your Api
          </center>
        </div>
        <div className="font-bold flex items-center justify-center text-[green] mt-3 text-[100px]">
          $0
        </div>
        <div className="font-bold flex items-center justify-center text-[grey] mt-3 text-[12px]">
          Free Trial for Zero Dollar/Month
        </div>
        <div className="font-bold flex items-center justify-center text-[white] mt-3 text-[12px]">
          <Link to="/fremo-register">
            <button className="border px-20 mb-10 py-2 rounded-md bg-green-600 text-[20px]">
              Select
            </button>
          </Link>
        </div>
        <div className="font-bold flex items-center justify-start text-[black] mt-3 text-[12px] ml-5">
          Benefits for Zero Dollar/Month
        </div>

        <div className="flex items-center ml-5 mt-5">
          <FaRegCircleCheck className="text-[green] mr-3 text-[20px]" />
          <p>Limited collaboration for plan members</p>
        </div>
        <div className="flex items-center ml-5 mt-5">
          <FaRegCircleCheck className="text-[green] mr-3 text-[20px]" />
          <p>Collection Recovery for 30days</p>
        </div>
        <div className="flex items-center ml-5 mt-5">
          <FaRegCircleCheck className="text-[green] mr-3 text-[20px]" />
          <p>3 custom domain</p>
        </div>
        <div className="flex items-center ml-5 mt-5">
          <FaRegCircleCheck className="text-[green] mr-3 text-[20px]" />
          <p>Only Three(3) company members</p>
        </div>
        <div className="flex items-center ml-5 mt-5">
          <FaRegCircleCheck className="text-[green] mr-3 text-[20px]" />
          <p>10 Collaboration</p>
        </div>
      </div>

      <div className="border w-[400px] shadow-md bg-slate-50 h-[90%] pb-10">
        <div className=" text-[41px] mb-10 h-[100px] bg-purple-700 flex items-center justify-center text-[white]">
          Bromo
        </div>
        <div className="w-full justify-center flex mb-20">
          <center className="w-[60%] text-center  flex items-center justify-center text-[grey] mt-3">
            Team up with your colleaques around your Api
          </center>
        </div>
        <div className="font-bold flex items-center justify-center text-[purple] mt-3 text-[100px]">
          $20
        </div>
        <div className="font-bold flex items-center justify-center text-[grey] mt-3 text-[12px]">
          Free Trial for Zero Dollar/Month
        </div>
        <div className="font-bold flex items-center justify-center text-[white] mt-3 text-[12px]">
          <Link to="/bromo-register">
            <button className="border px-20 mb-10 py-2 rounded-md bg-purple-700 text-[20px]">
              Select
            </button>
          </Link>
        </div>
        <div className="font-bold flex items-center justify-start text-[black] mt-3 text-[12px] ml-5">
          Benefits for Zero Dollar/Month
        </div>

        <div className="flex items-center ml-5 mt-5">
          <FaRegCircleCheck className="text-[purple] mr-3 text-[20px]" />
          <p>Limited collaboration for plan members</p>
        </div>
        <div className="flex items-center ml-5 mt-5">
          <FaRegCircleCheck className="text-[purple] mr-3 text-[20px]" />
          <p>Collection Recovery for 30days</p>
        </div>
        <div className="flex items-center ml-5 mt-5">
          <FaRegCircleCheck className="text-[purple] mr-3 text-[20px]" />
          <p>3 custom domain</p>
        </div>
        <div className="flex items-center ml-5 mt-5">
          <FaRegCircleCheck className="text-[purple] mr-3 text-[20px]" />
          <p>Only Three(3) company members</p>
        </div>
        <div className="flex items-center ml-5 mt-5">
          <FaRegCircleCheck className="text-[purple] mr-3 text-[20px]" />
          <p>10 Collaboration</p>
        </div>
      </div>

      <div className="border w-[400px] shadow-md bg-slate-50 h-[90%] pb-10">
        <div className=" text-[41px] mb-10 h-[100px] bg-red-700 flex items-center justify-center text-[white]">
          Premo
        </div>
        <div className="w-full justify-center flex mb-20">
          <center className="w-[60%] text-center  flex items-center justify-center text-[grey] mt-3">
            Team up with your colleaques around your Api
          </center>
        </div>
        <div className="font-bold flex items-center justify-center text-[red] mt-3 text-[100px]">
          $0
        </div>
        <div className="font-bold flex items-center justify-center text-[grey] mt-3 text-[12px]">
          Free Trial for Zero Dollar/Month
        </div>
        <div className="font-bold flex items-center justify-center text-[white] mt-3 text-[12px]">
          <Link to="/premo-register">
            <button className="border px-20 mb-10 py-2 rounded-md bg-red-600 text-[20px]">
              Select
            </button>
          </Link>
        </div>
        <div className="font-bold flex items-center justify-start text-[black] mt-3 text-[12px] ml-5">
          Benefits for Zero Dollar/Month
        </div>

        <div className="flex items-center ml-5 mt-5">
          <FaRegCircleCheck className="text-[red] mr-3 text-[20px]" />
          <p>Limited collaboration for plan members</p>
        </div>
        <div className="flex items-center ml-5 mt-5">
          <FaRegCircleCheck className="text-[red] mr-3 text-[20px]" />
          <p>Collection Recovery for 30days</p>
        </div>
        <div className="flex items-center ml-5 mt-5">
          <FaRegCircleCheck className="text-[red] mr-3 text-[20px]" />
          <p>3 custom domain</p>
        </div>
        <div className="flex items-center ml-5 mt-5">
          <FaRegCircleCheck className="text-[red] mr-3 text-[20px]" />
          <p>Only Three(3) company members</p>
        </div>
        <div className="flex items-center ml-5 mt-5">
          <FaRegCircleCheck className="text-[red] mr-3 text-[20px]" />
          <p>10 Collaboration</p>
        </div>
      </div>
    </div>
  );
};

export default Plans;
