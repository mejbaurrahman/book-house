/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

export default function SignUp() {
  const [errorShow, setErrorShow] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const { createUser, user, setUser, loading, setLoading, updateUser } =
  // useContext(AuthContext);
  // const [createdEmail, setCreatedEmail] = useState("");
  // const [token] = useToken(createdEmail);
  // const navigate = useNavigate();

  // if (token) {
  //   navigate("/");
  // }
  const handleSignUp = (data) => {
    console.log(data);
    // setErrorShow("");
    // createUser(data.email, data.password)
    //   .then((result) => {
    //     const user = result.user;
    //     // console.log(user);

    //     setLoading(true);
    //     const image = data.image[0];
    //     const formData = new FormData();
    //     formData.append("image", image);
    //     fetch(
    //       `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_img_bb_key}`,
    //       {
    //         method: "POST",
    //         body: formData,
    //       }
    //     )
    //       .then((res) => res.json())
    //       .then((imageData) => {
    //         if (imageData.success) {
    //           const userInfo = {
    //             displayName: data.name,
    //             photoURL: imageData.data.url,
    //           };
    //           updateUser(userInfo)
    //             .then((result) => {
    //               // setUser(user);
    //               saveUser(data.name, data.email, data.role);
    //               setLoading(false);
    //               // navigate('/');
    //               toast.success(`Created a profile as ${data.role}`);
    //               // console.log(user)
    //             })
    //             .catch((error) => {
    //               setErrorShow(error.message);
    //               setLoading(false);
    //             });
    //         }
    //       });
    //   })
    //   .catch((error) => {
    //     setErrorShow(error.message);
    //     setLoading(false);
    //   });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch(`https://mobileshop-inky.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // toast.success('Saved in database succesfully')
        // setCreatedEmail(email);
      })
      .catch((error) => setErrorShow(error.message));
  };

  return (
    <div className="flex justify-center items-center my-16">
      <div className="lg:w-1/3 md:w-1/3 w-full mx-auto px-2">
        <div>
          <SectionHeading heading="Register"></SectionHeading>
        </div>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="name"
              className="input input-bordered w-full "
            />
          </div>
          {errors.name?.type === "required" && (
            <p className="text-rose-800" role="alert">
              Name is required
            </p>
          )}
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              {...register("photoUrl")}
              placeholder="photoUrl"
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </div>
          {errors.email?.type === "required" && (
            <p className="text-rose-800" role="alert">
              Email is required
            </p>
          )}

          <div className="form-control w-full">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              className="input input-bordered w-full"
            />
            {errors.password?.type === "required" && (
              <p className="text-rose-800" role="alert">
                Password is required
              </p>
            )}{" "}
            <br />
          </div>
          <button type="submit" className="btn btn-ghost btn-outline">
            Register
          </button>
        </form>
        {errorShow && <p className="text-red-600">{errorShow}</p>}
        <p>
          Already have account{" "}
          <Link to="/login" className="text-primary opacity-70">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
}
