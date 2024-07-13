import Navbar from "./components/Nav/Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import About from "./Pages/About";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminMembership from "./Pages/Admin/AdminMembership";
import AdminPage from "./Pages/Admin/AdminPage";
import AdminPayment from "./Pages/Admin/AdminPayment";
import AdminSettings from "./Pages/Admin/AdminSetting";
import AdminTrainers from "./Pages/Admin/AdminTrainers";
import Blog from "./Pages/Blog";
import Classes from "./Pages/Classes";
import Gallery from "./Pages/Gallery/Gallery";
import GalleryPage1 from "./Pages/Gallery/GalleryPage1";
import GalleryPage2 from "./Pages/Gallery/GalleryPage2";
import PaymentMethod from "./Pages/Payment/PaymentMethod";
import Price from "./Pages/Price";
import Friday from "./Pages/Schedule/Friday";
import Monday from "./Pages/Schedule/Monday";
import Saturday from "./Pages/Schedule/Saturday";
import Schedule from "./Pages/Schedule/Schedule";
import Sunday from "./Pages/Schedule/Sunday";
import Thursday from "./Pages/Schedule/Thursday";
import Tuesday from "./Pages/Schedule/Tuesday";
import Wednesday from "./Pages/Schedule/Wednesday";
import InstructorProfile from "./Pages/Trainer/InstructorProfile";


function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="classes" element={<Classes />} />
          <Route path="pricing" element={<Price />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />

          <Route path="/trainersProfile" element={<InstructorProfile />} />
          <Route path="/paymentMethod" element={<PaymentMethod />} />

          <Route path="schedule" element={<Schedule />}>
            <Route path="monday" element={<Monday />} />
            <Route path="tuesday" element={<Tuesday />} />
            <Route path="wednesday" element={<Wednesday />} />
            <Route path="thursday" element={<Thursday />} />
            <Route path="friday" element={<Friday />} />
            <Route path="saturday" element={<Saturday />} />
            <Route path="sunday" element={<Sunday />} />
          </Route>

          <Route path="gallery" element={<Gallery />}>
            <Route path="page-1" element={<GalleryPage1 />} />
            <Route path="page-2" element={<GalleryPage2 />} />
          </Route>

          <Route path="admin" element={<AdminPage />}>
            <Route path="/admin/settings" component={<AdminSettings />} />
            <Route path="/admin/dashboard" component={<AdminDashboard />} />
            <Route path="/admin/trainers" component={<AdminTrainers />} />
            <Route path="/admin/membership" component={<AdminMembership />} />
            <Route path="/admin/payment" component={<AdminPayment />} />
          </Route>

        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

