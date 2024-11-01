import {
  InfoContainer,
  CartTotal,
  Coffee,
  CoffeInfo,
  CartTotalInfo,
  CheckoutButton,
} from "./styles";
import { Contador } from "../../Atoms/Contador";
import { Button } from "../../Atoms/Button";
import { Trash } from "@phosphor-icons/react";
import { useCart } from "../../../hooks/useCart";
import { coffees } from "../../../../data.json";
import type { FormInputs } from "../Form";
import { type SubmitHandler, useForm } from "react-hook-form";

export const Cart = () => {
  const {
    cart,
    addItem,
    decrementItemQuantity,
    incrementItemQuantity,
    orders,
    removeItem,
  } = useCart();

  if(!cart || !Array.isArray(cart)) {
    return <div>Nenhum item no carrinho</div>
  }

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error("Invalid coffee.");
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId);
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId);
  }

  function handleItemRemoval(itemId: string) {
    removeItem(itemId);
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert("é preciso adicionar itens ao carrinho");
    }
  };

  return (
    <>
      <InfoContainer>
        <h2>Cafés Selecionados</h2>
        <CartTotal>
          {coffeesInCart.map((coffee) => (
            <Coffee key={coffee.id}>
              <div>
                <img src={coffee.image} alt={coffee.title} />
                <div>
                  <span>{coffee.title}</span>
                  <CoffeInfo>
                    <Contador 
                      initialValue={coffee.quantity}
                      onIncrement={() => handleItemIncrement(coffee.id)}
                      onDecrement={() => handleItemDecrement(coffee.id)}
                    />
                    <Button
                      hasIcon
                      icon={<Trash />}
                      title="REMOVER"
                      size={"m"}
                      onPress={() => handleItemRemoval(coffee.id)}
                    />
                  </CoffeInfo>
                </div>
              </div>
              <aside>R$ {coffee.price?.toFixed(2)}</aside>
            </Coffee>
          ))}
          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(19)}
              </span>
            </div>

            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(5)}
              </span>
            </div>

            <div>
              <span>Total</span>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(totalItemsPrice)}
              </span>
            </div>
            <CheckoutButton type="submit" form="order">
              Confirmar pedido
            </CheckoutButton>
          </CartTotalInfo>
        </CartTotal>
      </InfoContainer>
    </>
  );
};
