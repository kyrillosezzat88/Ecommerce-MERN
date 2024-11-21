import { Dispatch, SetStateAction } from "react";

type TLogin = {
  setLoginView: Dispatch<SetStateAction<boolean>>;
};
const Login = ({ setLoginView }: TLogin) => {
  return (
    <>
      <h1 className="text-xl font-semibold text-gray-700">Login</h1>
      <form className="bg-white p-4 space-y-2">
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

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </div>
      </form>
      <div>
        You don`t have an account Please
        <span
          className="font-bold underline cursor-pointer mx-2"
          onClick={() => setLoginView(false)}
        >
          Register
        </span>
      </div>
    </>
  );
};

export default Login;
