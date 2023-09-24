import PropTypes from "prop-types"; // ES6
const Cart = ({ selectedCoursesName, totalHours, totalPrice, remainHours }) => {
  return (
    <>
      <div className="card-main w-full md:w-2/4 lg:w-2/5 xl:w-1/4">
        <div className="card p-6  bg-[#FFFFFF] ">
          <div className="card-body gap-0 px-0 py-4 ">
            <h2 className="card-title text-lg	 text-[#2F80ED] font-bold ">
              Credit Hour Remaining {remainHours}hr
            </h2>
            <hr className="my-4" />
            <div className="course-nam">
              <h2 className="text-xl text-[#1C1B1B] font-bold">Course Name</h2>
              <div className="course-list mt-6 text-[#1C1B1B99] ">
                <ol className="px-6 list-decimal">
                  {selectedCoursesName.map((coursname, index) => (
                    <li key={index}>{coursname.title} </li>
                  ))}
                </ol>
              </div>
              <hr className="my-4" />
              <p className=" text-[#1C1B1BCC] font-[500] ">
                Total Credit Hour : {totalHours}
              </p>
              <hr className="my-4" />
              <p className="  text-[#1C1B1BCC] font-[600]">
                Total Price : {totalPrice} USD
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Cart.propTypes = {
  selectedCoursesName: PropTypes.array,
  totalHours: PropTypes.number,
  totalPrice: PropTypes.number,
  remainHours: PropTypes.number,
};

export default Cart;
