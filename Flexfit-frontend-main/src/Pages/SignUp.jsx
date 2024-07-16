import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { UserAuth } from "../context/AuthContext";

function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  // State for showing success popup
  const [showSuccess, setShowSuccess] = useState(false);
  // State for validation errors
  const [errors, setErrors] = useState({});

  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Simple validation
    if (!fname.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fname: "First name is required",
      }));
      return;
    }
    if (!lname.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lname: "Last name is required",
      }));
      return;
    }
    if (!email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      return;
    }
    if (!password.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      return;
    }

    try {
      await signUp(fname, lname, email, password);
      // If signUp succeeds, show success popup

      // Navigate and scroll to top
      navigate("/login");
      setShowSuccess(true);
      goTop();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Sign Up
          </h1>
        </div>
        {/* form  */}
        <div className="py-[10rem] flex justify-center page-padding">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl"
          >
            <label className="text-[2rem] text-white mb-3 font-medium">
              First Name
            </label>
            <input
              className={`text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] ${
                errors.fname && "border-red-500"
              }`}
              placeholder="John"
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            {errors.fname && (
              <p className="text-red-500 text-sm mt-1">{errors.fname}</p>
            )}

            <label className="text-[2rem] text-white mb-3 font-medium">
              Last Name
            </label>
            <input
              className={`text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] ${
                errors.lname && "border-red-500"
              }`}
              placeholder="Doe"
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            {errors.lname && (
              <p className="text-red-500 text-sm mt-1">{errors.lname}</p>
            )}

            <label className="text-[2rem] text-white mb-3 font-medium">
              Email
            </label>
            <input
              className={`text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] ${
                errors.email && "border-red-500"
              }`}
              placeholder="flexfit@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}

            <label className="text-[2rem] text-white mb-3 font-medium">
              Password
            </label>
            <input
              className={`text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] ${
                errors.password && "border-red-500"
              }`}
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}

            <button
              type="submit"
              className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-10"
            >
              Sign Up
            </button>
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">Already have an account?</p>
              <Link
                to="/login"
                className="text-[#ff0336] font-bold text-[1.5rem]"
              >
                Sign In
              </Link>
            </div>
            <p className="text-[#ffffffbc] text-[1.3rem] mt-5">
              ( Make <span className="text-[#ff0336]">new Account</span> or go to
              <span className="text-[#ff0336]"> Sign In</span> Page for Test
              Account )
            </p>
          </form>
        </div>
        <Footer />
      </section>

      {/* Success popup */}
      {showSuccess && (
        <div className="fixed top-0 right-0 m-8 bg-green-500 text-white p-4 rounded-md shadow-lg z-50">
          <p className="text-lg font-medium">
            Registration Successful! You can now proceed to login.
          </p>
          <Link
            to="/login"
            className="bg-white text-[#ff0336] py-2 px-4 mt-2 inline-block rounded-md text-lg font-medium"
          >
            Go to Login
          </Link>
        </div>
      )}
    </>
  );
}

export default Signup;
