import { Link } from "react-router-dom";

export default function Register() {
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const newUser = { name, photo, email, password };
    console.log(newUser);
  };

  return (
    <div className="xl:px-20 lg:px-12 md:px-8 px-2 h-[90vh]">
      <h2 className="text-3xl md:text-4xl lg:text-5xl pt-[15vh] mb-10 text-pink font-bold text-center">
        Please Register
      </h2>
      <form
        className="flex justify-center gap-5 flex-col"
        onSubmit={handleRegister}
      >
        <input
          className="focus:border-pink border-[2px] outline-none  px-3 py-2 lg:text-lg w-[80vw] md:w-[25rem] lg:w-[30rem] rounded-xl mx-auto"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="focus:border-pink border-[2px] outline-none  px-3 py-2 lg:text-lg w-[80vw] md:w-[25rem] lg:w-[30rem] rounded-xl mx-auto"
          type="url"
          name="photo"
          placeholder="Photo URL"
        />
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
          {`Already have an account? Please `}
          <Link to={"/login"} className="text-pink font-bold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
