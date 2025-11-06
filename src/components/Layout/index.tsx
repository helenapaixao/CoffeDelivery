import { Outlet } from "react-router-dom";
import { Header } from "../Molecules/Header";
import { CartContextProvider } from "../../contexts/CartProvider";
import { ToastProvider } from "../../contexts/ToastProvider";

export const Layout = () => {
  return (
    <ToastProvider>
      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </ToastProvider>
  );
};

