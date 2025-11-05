import { Outlet } from "react-router-dom";
import { Header } from "../Molecules/Header";
import { CartContextProvider } from "../../contexts/CartProvider";

export const Layout = () => {
  return (
    <CartContextProvider>
      <Header />
      <Outlet />
    </CartContextProvider>
  );
};

