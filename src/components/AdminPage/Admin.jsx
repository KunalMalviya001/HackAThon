import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ForOutlet from './ForOutlet'
import Professors from '../NewQuery/Professors'
import Student from '../NewQuery/Student'
import Courses from '../NewQuery/Courses'
import Departments from '../NewQuery/Departments'
import NewQuery from '../NewQuery/NewQuery'



function Admin() {
  // Creating Router For Admin page
  const router = createBrowserRouter([{
    path: "/",
    element: <ForOutlet />,
    children: [
      {
        path: "",
        element: <NewQuery />,
      },
      {
        path: "\Professors",
        element: <Professors />,
      },
      {
        path: "\Student",
        element: <Student />,
      },
      {
        path: "\Courses",
        element: <Courses />,
      },
      {
        path: "\Departments",
        element: <Departments />,
      },
    ]
  }])

  return (
    <>
      {/* Using The Router Provider */}
      <RouterProvider router={router} />
    </>
  )

  
}

export default Admin