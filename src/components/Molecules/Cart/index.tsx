import { InfoContainer, CartTotal, Coffee, CoffeInfo } from "./styles";
import { Contador } from "../../Atoms/Contador";
import { Button } from "../../Atoms/Button";
import { Trash } from "@phosphor-icons/react";

export const Cart = () => {
  return (
    <>
      <InfoContainer>
        <h2>Cafés Selecionados</h2>
        <CartTotal>
          <Coffee>
            <div>
              <img  src="https://avatars.githubusercontent.com/u/11083288?v=4"/>
              <div>
                <span>Expresso Tradicional</span>
                <CoffeInfo>
                  <Contador/>
                  <Button
                    hasIcon
                    icon={<Trash />}
                    title="REMOVER"
                    size={"m"}
                    onPress={() => null}
                  />
                </CoffeInfo>
              </div>
            </div>
            <aside>
              R$ 19,00
            </aside>
          </Coffee>
        </CartTotal>
      </InfoContainer>
    </>
  );
};
