import { useEffect } from "react";
import PropTypes from "prop-types"; // ES6
import Course from "./Course";

const Courses = ({courses,setCourses,handleAddToName}) => {

  // defin a useEffect
  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await fetch("Api/Course.json");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCourse();
  },[]);

  return (
    <>
      <div className="courses w-full md:w-2/4 lg:w-3/5 xl:w-3/4 grid-cols-1 sm:grid  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 ">
        {courses.map((course) => (
          <Course handleAddToName={handleAddToName} key={course.id} course={course}></Course>
        ))}
      </div>
    </>
  );
};
Courses.propTypes = {
  course: PropTypes.array,
  handleAddToName: PropTypes.func,
  courses: PropTypes.array,
  setCourses: PropTypes.func
};
export default Courses;
