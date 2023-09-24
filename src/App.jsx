import Swal from "sweetalert2";
import Courses from "./Components/Courses/Courses";
import Cart from "./Components/Cart/Cart";
import "./App.css";
import { useState } from "react";

function App() {
  const handleDuplicateCourseName = () => {
    return Swal.fire({
      icon: "error",
      title: "Duplicate Value...",
      text: "You Can't take Duplicate Course !",
    });
  };
  // define a state
  const [courses, setCourses] = useState([]);
  const [selectedCoursesName, selectedSetCoursesName] = useState([]);
  const [totalHours, setTotalHours] = useState(0);
  const [totalPrice, settotalPrice] = useState(0);
  const [remainHours, setRemainHours] = useState(20);

  const handleAddToName = (selectedCourse) => {
    const isExist = selectedCoursesName.find(
      (item) => item.id === selectedCourse.id
    );
    console.log(isExist);

    if (isExist) {
      return handleDuplicateCourseName();
    }


    // totoall hourse and price
    let totallCreaditHours = selectedCourse.credit;
    let totallPrice = selectedCourse.price;
    selectedCoursesName.forEach((item) => {
      totallCreaditHours += item.credit;
      totallPrice += item.price;
    });    
    
    const remainingHoursCreadit = 20 - totallCreaditHours;
    if (totallCreaditHours > 20 || remainingHoursCreadit < 0) {
      return Swal.fire({
        icon: "error",
        title: "Not Enough Credit ",
        text: "You Can't More Course !",
      });
    }
    // selected course name
    selectedSetCoursesName([...selectedCoursesName, selectedCourse]);
    setTotalHours(totallCreaditHours);
    settotalPrice(totallPrice);
    setRemainHours(remainingHoursCreadit);


  };
  return (
    <>
      <div className="w-full p-8 sm:p-14 mx-auto">
        <h2 className="text-2xl sm:text-4xl mb-9	text-[#1C1B1B] font-bold text-center ">
          Course Registration
        </h2>
        <main className="md:flex justify-center gap-3">
          <Courses
            courses={courses}
            setCourses={setCourses}
            handleAddToName={handleAddToName}
          ></Courses>
          <Cart
            selectedCoursesName={selectedCoursesName}
            totalHours={totalHours}
            totalPrice={totalPrice}
            remainHours={remainHours}
          ></Cart>
        </main>
      </div>
    </>
  );
}

export default App;
