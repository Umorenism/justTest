import { useState } from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { PuffLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { createFreeMoAccount } from "../api/authAPI";

const Register = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(false);

  const schema = yup.object({
    companyName: yup.string().required("Company Name must be filled"),
    email: yup.string().email().required("Email must be filled"),
    password: yup.string().min(6).required("Password must be filled"),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit((data) => {
    setToggle(true);
    console.log(data);
    createFreeMoAccount(data).then(() => {
      navigate("/login");
    });
  });

  return (
    <div className="flex items-center justify-center w-full h-screen bg-[white]">
      <form
        className="border rounded-md w-[500px] min-h-[600px] shadow-sm mx-4"
        onSubmit={onHandleSubmit}
      >
        <div className="pl-4 mt-8 ">
          <span className="font-bold text-[20px] mb-[30px] ">Sign Up</span>

          <br />
          <br />
          <div className="">
            <div className="font-[500]">CompanyName</div>
            <input
              type="text"
              placeholder="Companyname"
              className="w-[95%] outline-0 border h-[35px]"
              {...register("companyName")}
            />
            {errors.companyName?.message && (
              <div className="text-[crimson] justify-end flex mr-[30px]">
                {errors.companyName?.message}
              </div>
            )}
          </div>
          <div className="mt-[15px]">
            <div className="font-[500]">Email</div>
            <input
              type="text"
              placeholder="Email"
              className="w-[95%] outline-0 border h-[35px]"
              {...register("email")}
            />
            {errors.email?.message && (
              <div className="text-[crimson] justify-end flex mr-[30px]">
                {errors.email?.message}
              </div>
            )}
          </div>
          <div className="mt-[15px]">
            <div className="font-[500]">Password</div>
            <input
              type="text"
              placeholder="Password"
              className="w-[95%] outline-0 border h-[35px]"
              {...register("password")}
            />
            {errors.password?.message && (
              <div className="text-[crimson] justify-end flex mr-[30px]">
                {errors.password?.message}
              </div>
            )}
          </div>
          <div className="mt-[15px]">
            <div className="font-[500]">Confirm Password</div>
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-[95%] outline-0 border h-[35px]"
              {...register("confirm")}
            />
            {errors.password?.message && (
              <div className="text-[crimson] justify-end flex mr-[30px]">
                {errors.password?.message}
              </div>
            )}
          </div>
        </div>
        <div className="ml-[70px] mt-[20px] mr-[55px]">
          {/* <Link to="/signIn"> */}
          <button
            className="border py-4 rounded-sm w-[90%] bg-green-600 text-[white] font-bold mb-5"
            type="submit"
          >
            {toggle ? (
              <PuffLoader color="white" size={29} />
            ) : (
              "Register a Fremo Account"
            )}
          </button>
          {/* </Link> */}
          <div className="ml-[50px]">
            Already have an Account
            <Link to="/signIn">
              <span className="font-bold text-purple-700 ml-2">
                Sign In here
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="border-b w-full"></div>
            <div className="mr-3 ml-3 mb-5 mt-3">Or</div>
            <div className="border-b w-full mr-10"></div>
          </div>
          <div className="flex mr-10">
            <button className="border py-2 w-[90%] bg-red-800 text-[white] font-bold mb-5">
              with Google
            </button>
            <button className="border py-2 w-[90%] bg-blue-900 text-[white] font-bold ml-5 mb-5">
              with Facebook
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
