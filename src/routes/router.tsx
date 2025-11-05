
import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../screens/Home'
import {Checkout} from '../screens/Checkout'
import { Layout } from '../components/Layout'
import { Success } from '../screens/Success'

const ErrorPage = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1>Ops! Página não encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <a href="/" style={{ 
        marginTop: '20px', 
        padding: '10px 20px', 
        backgroundColor: '#8047F8', 
        color: 'white', 
        textDecoration: 'none',
        borderRadius: '6px'
      }}>
        Voltar para a home
      </a>
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/order/:orderId/success',
        element: <Success />,
        errorElement: <ErrorPage />
      },
    ]
  },
])


export default router;