import PropTypes from "prop-types"; // ES6
import { BiBookmark } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";

const Course = ({ course, handleAddToName }) => {
  const { title, thumbnail, description, price, credit } = course;
  return (
    <>
      <div className="card shadow-md p-4 xl:p-2   bg-[#FFFFFF] ">
        <figure className="h-[13rem]  xl:h-[16rem]">
          <img
            className="h-full w-full object-cover "
            src={thumbnail}
            alt={title + "image"}
          />
        </figure>
        <div className="card-body gap-0 px-0 py-4 ">
          <h2 className="card-title text-lg	 text-[#1C1B1B] font-[500] mt-4">
            {title}
          </h2>
          <p className="card-desc text-[#1C1B1B99] mt-4">{description}</p>
          <div className="price-credit sm:flex text-[#1C1B1B99] font-[500]  mt-4 sm:justify-between ">
            <div className="price flex mb-2 sm:mb-0 gap-2 items-center ">
              <BiDollar />

              <p>Price : {price}</p>
            </div>
            <div className="creadits flex  gap-2 items-center">
              <BiBookmark />

              <p>Credit : {credit}hr</p>
            </div>
          </div>
          <div className="card-actions  mt-6 ">
            <button
              onClick={() => handleAddToName(course)}
              className="btn bg-[#2F80ED] w-full btn-primary"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    credit: PropTypes.number,
  }).isRequired,
  handleAddToName: PropTypes.func,
};

export default Course;
