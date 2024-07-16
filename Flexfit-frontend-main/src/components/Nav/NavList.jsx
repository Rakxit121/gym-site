import { Link } from "react-router-dom";

function NavList() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };
  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>

        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/about"} style={{ color: 'white', textDecoration: 'none' }}>
            About
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/gallery/page-1"} style={{ color: 'white', textDecoration: 'none' }}>
            Gallery
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/schedule/monday"} style={{ color: 'white', textDecoration: 'none' }}>
            Schedule
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >

        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/pricing"} style={{ color: 'white', textDecoration: 'none' }}>
            Membership
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/classes"} style={{ color: 'white', textDecoration: 'none' }}>
            Trainers
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/contact"} style={{ color: 'white', textDecoration: 'none' }}>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavList;
