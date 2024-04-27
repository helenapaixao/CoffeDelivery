import {
  AddressForm,
  AndressContainer,
  CartTotal,
  Container,
  InfoContainer,
  PaymentContainer,
  PaymentHeading,
  PaymentOptions,
} from "./styles";
import { Input } from "../../Atoms/Input";
import {
  CurrencyDollar,
  MapPin,
  CreditCard,
  Bank,
  Money,
} from "@phosphor-icons/react";
import { ButtonCart } from "../ButtonCart";

export const Form = () => {
  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <form>
          <AndressContainer>
            <MapPin size={22} />
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            <AddressForm>
              <Input
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: "cep" } }}
                /* error={Error.cep} */
                /*    {...register('cep', { valueAsNumber: true })} */
              />
              <Input
                placeholder="Rua"
                type="text"
                containerProps={{
                  style: {
                    gridArea: "street",
                  },
                }}
              />

              <Input
                placeholder="Número"
                type="text"
                containerProps={{
                  style: {
                    gridArea: "number",
                  },
                }}
              />
              <Input
                placeholder="Complemento"
                type="text"
                containerProps={{
                  style: {
                    gridArea: "fullAddress",
                  },
                }}
              />

              <Input
                placeholder="Bairro"
                type="text"
                containerProps={{
                  style: {
                    gridArea: "neighborhood",
                  },
                }}
              />

              <Input
                placeholder="Cidade"
                type="text"
                containerProps={{
                  style: {
                    gridArea: "city",
                  },
                }}
              />
              <Input
                placeholder="UF"
                type="text"
                containerProps={{
                  style: {
                    gridArea: "state",
                  },
                }}
              />
            </AddressForm>
          </AndressContainer>
          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar{" "}
                </p>
              </div>
            </PaymentHeading>
            <PaymentOptions>
              <ButtonCart
                isSelected={false}
                onPress={() => {
                  console.log("teste");
                }}
                hasIcon
                icon={<CreditCard size={22} />}
                title="Cartão de crédito"
              />
              <ButtonCart
                isSelected={false}
                onPress={() => {}}
                hasIcon
                title="cartão de débito"
                icon={<Bank size={22} />}
              />
              <ButtonCart
                icon={<Money size={22} />}
                onPress={() => {}}
                title="Dinheiro"
                hasIcon={true}
                isSelected={false}
                size={20}
              />
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>
      <InfoContainer>
        <h2>Cafés Selecionados</h2>
        <CartTotal></CartTotal>
      </InfoContainer>
    </Container>
  );
};

export default Form;
