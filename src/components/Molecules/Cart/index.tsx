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
 
import { formatBRL } from "../../../utils/format";

export const Cart = () => {
  const { 
    cart,
    decrementItemQuantity,
    incrementItemQuantity,
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
    const totalPrice = previousValue + currentItem.price * currentItem.quantity;
    return totalPrice;
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

  if (cart.length === 0) {
    return (
      <InfoContainer>
        <h2>Cafés Selecionados</h2>
        <CartTotal>
          <div style={{ padding: 24, textAlign: 'center', width: '100%' }}>
            Seu carrinho está vazio.
          </div>
        </CartTotal>
      </InfoContainer>
    );
  }

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
                      min={1}
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
                {formatBRL(totalItemsPrice)}
              </span>
            </div>

            <div>
              <span>Entrega</span>
              <span>
                {formatBRL(5)}
              </span>
            </div>

            <div>
              <span>Total</span>
              <span>
                {formatBRL(totalItemsPrice + 5)}
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
