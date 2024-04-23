
import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../screens/Home'
import {Checkout} from '../screens/Checkout'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/checkout',
    element: <Checkout />
  },  
])


export default router;