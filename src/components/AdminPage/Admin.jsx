import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ForOutlet from './ForOutlet'
import MainContainer from '../MainContainer/MainContainer'




function Admin() {
  // Creating Router For Admin page
  const router = createBrowserRouter([{
    path: "/",
    element: <ForOutlet />,
    children: [
      {
        // For Implement NewQuery in Admin Page
        path: "",
        element: <MainContainer />,
      }
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