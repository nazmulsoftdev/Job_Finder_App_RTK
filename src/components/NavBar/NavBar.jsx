import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sortFilterAc } from "../../features/filter/filterSlice";
function NavBar() {
  const dispatch = useDispatch();

  const { sortFilter } = useSelector((state) => state.filters);

  //  Sort Search Handler

  const sortHandler = (value) => {
    dispatch(sortFilterAc(value));
  };

  return (
    <div>
      <Header />
      <div className="sidebar">
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                onClick={() => sortHandler("")}
                to="/"
                className="main-menu menu-active"
                id="lws-alljobs-menu"
              >
                <i className="fa-solid fa-briefcase"></i>
                <span> All Available Jobs</span>
              </Link>
              <ul className="space-y-6 lg:space-y-2 ">
                <li className="cursor-pointer">
                  <Link
                    to="/"
                    onClick={() => sortHandler("Internship")}
                    className="sub-menu"
                    id="lws-internship-menu"
                  >
                    <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                    Internship
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    to="/"
                    onClick={() => sortHandler("Fulltime")}
                    className="sub-menu"
                    id="lws-fulltime-menu"
                  >
                    <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                    Full Time
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    to="/"
                    onClick={() => sortHandler("Remote")}
                    className="sub-menu"
                    id="lws-remote-menu"
                  >
                    <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                    Remote
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/addNew" className="main-menu" id="lws-addJob-menu">
                <i className="fa-solid fa-file-circle-plus"></i>
                <span>Add NewJob</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
