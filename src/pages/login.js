import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import classNames from "classnames";

const Login = () => {
  const backgroundClass = classNames(
    "bg-[url('https://i.ibb.co/hRKMMLH/Rectangle.png')] max-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
  );
  const formClass = classNames(
    "relative bg-[#000000b0] w-[80%] md:w-[40%] lg:w-[25%] text-white mx-auto mt-20 lg:mt-32 py-10 px-5 rounded shadow-2xl"
  );
  const loginButton = classNames(
    "bg-[#627FF4] w-full py-1 my-3 rounded-sm hover:bg-slate-300 hover:text-[#627FF4] hover:font-bold"
  );
  return (
    <>
      <div className={backgroundClass}>
        <div className="py-20">
          <div className={formClass}>
            <FaUserAlt className="absolute top-[-10%] left-[40%] text-7xl bg-[#627FF4] px-5 rounded-full" />
            <h1 className="text-center py-5 text-xl">Login </h1>
            <div className="text-left px-5">
              <form className="text-left">
                <div className="py-2">
                  <p className="text-left text-slate-200 text-[15px] font-normal">
                    Email :
                  </p>
                  <input
                    className="w-full border-b-2 focus:outline-none font-light text-slate-300 text-[14px] bg-[#00000000] "
                    type="email"
                  />
                </div>
                <div className="py-2">
                  <p className="text-left text-slate-200 text-[15px] font-normal">
                    Password :
                  </p>
                  <input
                    className="w-full border-b-2 focus:outline-none font-light text-slate-300 text-[14px] bg-[#00000000] "
                    type="password"
                  />
                </div>
                <button type="submit" className={`${loginButton}`}>
                  Login
                </button>
              </form>
              <div className="text-center">
                <Link
                  className="text-[#627ff4] align-center font-normal text-lg"
                  href="/recovery"
                >
                  <h5 className="hover:text-white">Forget password?</h5>
                </Link>
              </div>
              <p className="text-slate-300 text-sm text-center">
                Dont have an account ?
                <Link
                  href="/register"
                  className="text-[#627ff4] pl-2 hover:text-white"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
