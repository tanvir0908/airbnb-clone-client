import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="xl:px-20 lg:px-12 md:px-8 px-2 h-[90vh]">
      <h2 className="text-3xl md:text-4xl lg:text-5xl pt-[15vh] mb-10 text-pink font-bold text-center">
        Please Login
      </h2>
      <form className="flex justify-center gap-5 flex-col">
        <input
          className="focus:border-pink border-[2px] outline-none  px-3 py-2 lg:text-lg w-[80vw] md:w-[25rem] lg:w-[30rem] rounded-xl mx-auto"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className=" px-3 py-2 focus:border-pink border-[2px] outline-none 
           lg:text-lg w-[80vw] md:w-[25rem] lg:w-[30rem] rounded-xl mx-auto"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className="border px-3 py-2 cursor-pointer hover:shadow-md text-lg lg:text-xl w-[80vw] md:w-[25rem] lg:w-[30rem] mx-auto rounded-xl bg-pink text-white font-semibold"
          type="submit"
          value={"Login"}
        />
        <p className="mx-auto lg:text-lg font-medium ">
          {`Don't have an account? Please `}
          <Link to={"/register"} className="text-pink font-bold">
            Register
          </Link>
        </p>
        <p className="flex items-center gap-1 mx-auto lg:text-lg font-medium border-2 border-pink px-5 py-2 rounded-xl">
          <FcGoogle />
          Continue with Google
        </p>
      </form>
    </div>
  );
}
