import { Dispatch, SetStateAction } from "react";

type TRegister = {
  setLoginView: Dispatch<SetStateAction<boolean>>;
};
const Register = ({ setLoginView }: TRegister) => {
  return (
    <>
      <h1 className="text-xl font-semibold text-gray-700">Register</h1>
      <form className="bg-white p-4 space-y-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">
              I agree to the terms and conditions
            </span>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </label>
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Sign Up
          </button>
        </div>
      </form>
      <div>
        Do you have an account ?
        <span
          className="font-bold underline cursor-pointer mx-2"
          onClick={() => setLoginView(true)}
        >
          Login
        </span>
      </div>
    </>
  );
};

export default Register;
