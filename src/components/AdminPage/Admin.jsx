import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ForOutlet from './ForOutlet'
import NewQuery from '../NewQuery/NewQuery'




function Admin() {
  // Creating Router For Admin page
  const router = createBrowserRouter([{
    path: "/",
    element: <ForOutlet />,
    children: [
      {
        // For Implement NewQuery in Admin Page
        path: "",
        element: <NewQuery />,
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