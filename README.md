# Course Registration App

This is a React application for course registration. It allows users to add courses, calculate the total price and credit hours, and track the remaining credit hours out of 20.

## Project Features

1. **Add Courses**: Users can add courses to their registration list.

2. **Calculate Total Price**: The application calculates the total price of all selected courses.

3. **Track Total Credit Hours**: Users can see the total credit hours of all selected courses, and the remaining hours out of 20.

## How State was Managed

### App Component

In the `App` component, the state was managed for two main pieces of information: the list of courses and the list of selected course names.


```jsx
const [courses, setCourses] = useState([]);
const [courseNames, setCourseNames] = useState([]);
```

##  Manage The Api Date
in the 'Courses' Component, I have used the React hook 'useEffct(()=>{},[])'. I have also used 'async' and 'await' to fetch data from API, and I have also used 'try and catch' for the error handling

## Manage Porps for communication data within components
in this react application I have used props and also validated the props using the 'npm props validation' package

