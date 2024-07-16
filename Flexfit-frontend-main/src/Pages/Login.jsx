import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      if (email === "admin@gmail.com" && password === "admin") {
        setShowSuccess(true);
        navigate("/admin/settings");
      } else if (email === "asd@g.c" && password === "asd") {
        setShowSuccess(true);
      } else {
        navigate("/home");
      }
      goTop();
    } catch (error) {
      console.log(error);
      // setError("Wrong email or password");
    }
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        navigate("/#home");
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [showSuccess, navigate]);

  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Sign In
          </h1>
        </div>
        {/* form  */}
        <div className="page-padding py-[10rem] flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl"
          >
            {error && (
              <p className="text-white bg-[#ff0336] font-bold text-[1.6rem] px-10 py-5 text-center mb-10">
                {error}
              </p>
            )}
            <label className="text-[2rem] text-white mb-3 font-medium">
              Email
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336]"
              placeholder="flexfit@gymail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="text-[2rem] text-white mb-3 font-medium outline-[#ff0336] outline-2">
              Password
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336]"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link to={'/admin/settings'}>
            <button
              type="submit"
              className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-10"
            >
              Sign In
            </button>
            </Link>
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">New to Flexfit?</p>
              <Link
                to="/signup"
                className="text-[#ff0336] font-bold text-[1.5rem]"
              >
                Sign Up
              </Link>
            </div>
            <p className="text-[#ffffffbc] text-[1.4rem] mt-3">
              <span className="text-[#ff0336]">Test Account</span> -
              flexfit@gymail.com{" "}
              <span className="text-[#ff0336]"> / </span> testpassword123
            </p>
          </form>
        </div>
        <Footer />
      </section>

      {/* Success popup */}
      {showSuccess && (
        <div className="fixed top-0 right-0 m-8 bg-green-500 text-white p-4 rounded-md shadow-lg z-50">
          <p className="text-lg font-medium">
            Login Successful! Redirecting to Home...
          </p>
        </div>
      )}
    </>
  );
}

export default Login;

















// import React, { useState, useEffect } from "react";
// import { UserAuth } from "../context/AuthContext";
// import { Link, useNavigate } from "react-router-dom";
// import Footer from "../components/Footer/Footer";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { user, logIn } = UserAuth();
//   const navigate = useNavigate();
//   const [error, setError] = useState("");
//   const [showSuccess, setShowSuccess] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (showSuccess) {
//       timer = setTimeout(() => {
//         setShowSuccess(false);
//         navigate("/#home");
//       }, 5000); // 5 seconds
//     }
//     return () => clearTimeout(timer);
//   }, [showSuccess, navigate]);

//   const goTop = () => {
//     window.scrollTo({
//       top: 0,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await logIn(email, password);
//       if (email === "admin@gmail.com" && password === "admin") {
//         navigate("/admin/settings");
//       } else if (email === "asd@g.c" && password === "asd") {
//         setShowSuccess(true);
//       } else {
//         navigate("/home");
//       }
//       goTop();
//     } catch (error) {
//       console.log(error);
//       setError("Wrong email or password");
//     }
//   };

//   return (
//     <>
//       <section className="login-section">
//         <div className="login-banner relative justify-center flex">
//           <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
//             Sign In
//           </h1>
//         </div>
//         {/* form  */}
//         <div className="page-padding py-[10rem] flex justify-center">
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl"
//           >
//             {error && (
//               <p className="text-white bg-[#ff0336] font-bold text-[1.6rem] px-10 py-5 text-center mb-10">
//                 {error}
//               </p>
//             )}
//             <label className="text-[2rem] text-white mb-3 font-medium">
//               Email
//             </label>
//             <input
//               className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336]"
//               placeholder="flexfit@gymail.com"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <label className="text-[2rem] text-white mb-3 font-medium outline-[#ff0336] outline-2">
//               Password
//             </label>
//             <input
//               className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336]"
//               placeholder="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <button
//               type="submit"
//               className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-10"
//             >
//               Sign In
//             </button>
//             <div className="flex gap-4 items-center mt-16 min450:flex-col">
//               <p className="text-white text-[1.5rem]">New to Flexfit?</p>
//               <Link
//                 to="/signup"
//                 className="text-[#ff0336] font-bold text-[1.5rem]"
//               >
//                 Sign Up
//               </Link>
//             </div>
//             <p className="text-[#ffffffbc] text-[1.4rem] mt-3">
//               <span className="text-[#ff0336]">Test Account</span> -
//               flexfit@gymail.com{" "}
//               <span className="text-[#ff0336]"> / </span> testpassword123
//             </p>
//           </form>
//         </div>
//         <Footer />
//       </section>

//       {/* Success popup */}
//       {showSuccess && (
//         <div className="fixed top-0 right-0 m-8 bg-green-500 text-white p-4 rounded-md shadow-lg z-50">
//           <p className="text-lg font-medium">
//             Login Successful! Redirecting to Home...
//           </p>
//         </div>
//       )}
//     </>
//   );
// }

// export default Login;
