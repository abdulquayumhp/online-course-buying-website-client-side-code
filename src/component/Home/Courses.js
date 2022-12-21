import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../../Customcss/curses.css";
import CoursesAbout from "./CoursesAbout";

const Courses = () => {
  const curses = useLoaderData();
  // console.log(curses);
  return (
    <div className="cures-container flex md:flex-row  flex-col pb-20">
      <div
        className="md:mt-36 md:ml-10 py-10 md:py-0 bg-orange-200
				text-black 
			w-full mx-auto 
			md:w-[350px]"
      >
        <h1 className="text-center pt-20 pb-5 text-black  text-xl">
          Category Name
        </h1>
        {curses.map((curse, i) => (
          <p className="ml-10  text-xl  text-black mb-2" key={curse.id}>
            <Link to={`/courses/${curse.id}`}>
              {i + 1}. {curse.category}
            </Link>

            <hr className="w-2/5  " />
          </p>
        ))}
      </div>
      <div className=" ">
        <div
          className="pt-36 grid 
				grid-cols-1
				lg:grid-cols-3
				md:grid-cols-2 w-10/12  mx-auto"
        >
          {curses.map((curse) => (
            <CoursesAbout key={curse.id} curse={curse} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
