import img from "../assets/todoList.jpeg";
import { GiArmorUpgrade, GiTeamUpgrade } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { FaPeopleRobbery } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { readUserAccount } from "../api/userAPI";
import ModelDisplay from "./modelDisplay";
import { viewProjects } from "../api/projectAPI";
import { NavLink } from "react-router-dom";

const Sider = () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  const [state, setState]: any = useState<Array<any>>([]);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    viewProjects(user?._id).then((res) => {
      setState(res.data);
    });
  }, []);

  console.log(state?.project);

  return (
    <div className="w-[250px] h-[calc(100vh-52px)] bg-[white] border-r">
      <div className="">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="font-[400] ml-[5px] text-[#D7A35F]">
          Vretha Dashboard
        </div>
      </div>
      <h3 className="font-bold text-[13px] mt-[10px] ml-[5px]">
        You Are On Free Mode
      </h3>
      <div className="border text-center w-[60%] py-[10px] rounded-md mt-[30px] cursor-pointer flex items-center justify-center bg-[#D7A35F] ml-10 hover:bg-[white] transition-all transition-duration-150ms mb-[10px]">
        <GiArmorUpgrade className="mr-[5px] " />
        <Link to="/Upgrade">
          <button className="font-bold ">UPRADE</button>
        </Link>
      </div>
      <hr />
      <div className="font-bold text-[13px] ml-[5px] mt-[5px]">Projects</div>

      <div>
        {state?.project?.map((props: any, i: number) => (
          <NavLink
            to={`/homescreen/${props._id}`}
            className="flex items-center justify-center mt-[10px] border  py-[5px] rounded-sm shadow-md cursor-pointer "
            key={i}
            onClick={() => {
              console.log(props._id);
            }}
          >
            <div className="mr-[10px] text-[20px]">{/* <CgGym /> */}</div>
            <div className="">{props?.projectName}</div>
          </NavLink>
        ))}
      </div>

      <div className="text-[16px] mt-[30px]  shadow-md h-[60px] flex items-center justify-center hover:cursor-pointer ">
        <h4
          className="font-[600]"
          onClick={() => {
            setToggle(true);
          }}
        >
          Add Project
        </h4>
      </div>

      {toggle && <ModelDisplay setToggle={setToggle} />}
    </div>
  );
};

export default Sider;
