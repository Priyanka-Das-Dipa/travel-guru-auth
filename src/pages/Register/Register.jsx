import React from "react";
import Navbar from "../../shared/Navbar";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div className="mb-10  h-[80vh]">
      <Navbar></Navbar>
      <div className="flex justify-center items-center mt-10">
        <div className="border px-14 py-5 rounded-md">
          <form>
            <h2 className="text-2xl font-bold">Register</h2>
            <div className="space-y-2">
              <div class="flex w-72 flex-col gap-6 mt-5">
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    name="firstName"
                  />
                  <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    First Name
                  </label>
                </div>
              </div>
              <div class="flex w-72 flex-col gap-6 mt-5">
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    name="lastName"
                  />
                  <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Last Name
                  </label>
                </div>
              </div>
              <div class="flex w-72 flex-col gap-6 mt-5">
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="email"
                    name="email"
                  />
                  <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Username or Email
                  </label>
                </div>
              </div>

              <div class="flex w-72 flex-col gap-6">
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="password"
                    name="password"
                  />
                  <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                  </label>
                </div>
              </div>
              <div class="flex w-72 flex-col gap-6">
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="password"
                    name="conformPassword"
                  />
                  <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Conform Password
                  </label>
                </div>
              </div>
              <div className="mt-5 flex gap-2">
                <input type="checkbox" name="" id="" />
                <span>Remember me</span>
              </div>
              <button className="btn btn-warning w-full mt-5">Register</button>
            </div>
            <p className="mt-5">
              Already have an Account?{" "}
              <Link to="/login" className="text-yellow-400 underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="text-center flex justify-center items-center mt-5">
        <div className="space-y-3">
          <button className="py-2 px-9 border rounded-xl flex items-center justify-between text-black text-xl gap-6">
            <FaFacebook className="text-2xl text-blue-400"></FaFacebook>{" "}
            Continue with Facebook
          </button>
          <button className="py-2 px-9 border rounded-xl flex items-center justify-between text-black text-xl gap-6">
            <FaGoogle className="text-2xl text-green-300"></FaGoogle> Continue
            with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
