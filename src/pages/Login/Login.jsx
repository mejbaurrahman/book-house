import { useForm } from "react-hook-form";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center my-16">
      <div className="lg:w-1/3 md:w-1/3 w-full px-2 mx-auto">
        <div>
          <SectionHeading heading="Login"></SectionHeading>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Email
              </label>
              <input
                className="input input-bordered w-full"
                id="email"
                type="email"
                placeholder="*@*.com"
                {...register("email", { required: true })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">Email is required</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Password
              </label>
              <input
                className="input input-bordered w-full"
                id="password"
                type="password"
                placeholder="*******"
                {...register("password", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  Paasword is required
                </p>
              )}
            </div>

            <button type="submit" className="btn btn-ghost btn-outline">
              Login
            </button>
          </form>
          <div className="my-2">
            <p className="">
              New User?{" "}
              <Link className="text-primary opacity-70" to="/register">
                Register
              </Link>
            </p>
          </div>
          <div className="divider">OR</div>
          <div className="flex lg:justify-between md:justify-between lg:flex-row flex-col items-center">
            <button type="submit" className="btn btn-ghost btn-outline my-2">
              Login With Google
            </button>
            <button type="submit" className="btn btn-ghost btn-outline">
              Login With Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
