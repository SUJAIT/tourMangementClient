
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SerchResultList from '../pages/SerchResultList'
import Layout from '../Layout/Layout'
import ThankYou from '../pages/ThankYou'

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/", element:<Home></Home>
            },
            {
                path:"/tour",element:<Tours></Tours>
            },
            {
                path:"/tour/:id",element:<TourDetails></TourDetails>
            },
            {
                path:"/login" ,element:<Login></Login>
            },
            {
                path:"/register" ,element:<Register></Register>
            },
            {
                path:"/tour/search" , element:<SerchResultList></SerchResultList>
            },
            {
                path:"/thank-you" , element:<ThankYou></ThankYou>
            },
     
        ]
    }
])

export default router
