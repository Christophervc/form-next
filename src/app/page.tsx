"use client";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { userSchema,mapGender,mapUserType } from "./schemas/userSchema";

type Inputs = {
  firstName: string,
  lastName: string,
  age: string,
  gender: string,
  username: string,
  userType: string,
  email: string,
  password: string,
  confirmPassword: string
}
export default function Home() {
  const { register, handleSubmit,watch, formState: { errors } } = useForm<Inputs>({resolver: zodResolver(userSchema)});
  const genderOptions = Object.entries(mapGender).map(([key, value]) => (<option value={key} key={key}>{value}</option>))
  const userTypeOptions = Object.entries(mapUserType).map(([key, value]) => (<option value={key} key={key}>{value}</option>))
  console.log(errors);
  return (
    <main className="flex min-h-screen flex-col items-center  justify-between p-24">
      <h1 className="fixed left-0 bg-black text-white  uppercase top-0 flex w-full items-center justify-center  border-b border-gray-300 bg-gradient-to-b pb-6 pt-8 ">
        FORM EXAMPLE WITH REACT HOOK FORM AND ZOD
      </h1>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className=" w-full max-w-lg bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 border-b border-gray-300"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="firstName"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="appearance-none block w-full bg-gray-200 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="First Name"
              {...register("firstName")}
            />
            {errors.firstName?.message && <small className="text-red-500">{errors.firstName?.message}</small>}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="lastName"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="appearance-none block w-full bg-gray-200 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Last Name"
              {...register("lastName")}
            />
            {errors.lastName?.message && <small className="text-red-500">{errors.lastName?.message}</small>}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="age"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Age
            </label>
            <input
              type="text"
              id="age"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="25"
              {...register("age")}
            />
            {errors.age?.message && <small className="text-red-500">{errors.age?.message}</small>}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="gender"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              {...register("gender")}
            >
              {genderOptions}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
            <label
              htmlFor="username"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Username"
              {...register("username")}
            />
            {errors.username?.message && <small className="text-red-500">{errors.username?.message}</small>}
          </div>
          <div className="w-full md:w-1/2 px-3 mt-6 mb-6 md:mb-0">
            <label
              htmlFor="userType"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              User Type
            </label>
            <select
              id="userType"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              {...register("userType")}
            >
              {userTypeOptions}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="email"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="user@example.com"
              {...register("email")}
            />{errors.email?.message && <small className="text-red-500">{errors.email?.message}</small>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="password"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="*********"
              {...register("password")}
            />
            {errors.password?.message && <small className="text-red-500">{errors.password?.message}</small>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="confirmPassword"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="*********"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message && <small className="text-red-500">{errors.confirmPassword?.message}</small>}
          </div>
        </div>
        <div className="flex justify-center -mx-3 mb-6 px-3">
          <button
            type="submit"
            className="shadow bg-purple-600 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </div>
      </form>
    </main>
  );
}
