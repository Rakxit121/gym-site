import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Payment from "./pages/Payment";
import AdminMembers from "./pages/AdminMembers";
import Membership from "./pages/Membership";
import Schedule from "./pages/Schedule";
import Trainers from "./pages/Trainers";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Trainers1 from "./pages/Trainers1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/payment":
        title = "";
        metaDescription = "";
        break;
      case "/adminmembers":
        title = "";
        metaDescription = "";
        break;
      case "/membership":
        title = "";
        metaDescription = "";
        break;
      case "/schedule":
        title = "";
        metaDescription = "";
        break;
      case "/trainers":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/login-1":
        title = "";
        metaDescription = "";
        break;
      case "/signup-1":
        title = "";
        metaDescription = "";
        break;
      case "/trainers1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/adminmembers" element={<AdminMembers />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/trainers" element={<Trainers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login-1" element={<Login />} />
      <Route path="/signup-1" element={<Signup />} />
      <Route path="/trainers1" element={<Trainers1 />} />
    </Routes>
  );
}
export default App;
