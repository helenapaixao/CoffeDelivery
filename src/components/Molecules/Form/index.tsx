import {useEffect, useState} from 'react';
import {
  AddressForm,
  AndressContainer,
  Container,
  PaymentContainer,
  PaymentHeading,
  PaymentOptions,
  InfoContainer,
  AdressHeading
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
import { Cart } from '../Cart';

export const Form = () => {
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');



  useEffect(() => {
    fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
      .then((response) => response.json())
      .then((data) => {
        setStreet(data.street);
        setNeighborhood(data.neighborhood);
        setCity(data.city);
        setState(data.state);
        console.log(data);
      });
  }
  , []);


  
  

  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <form>
          <AndressContainer>
            <AdressHeading>
            <MapPin size={22} />
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            </AdressHeading>
           
            <AddressForm>
              <Input
                placeholder="CEP"
                type="number"
                onChange={(e) => setCep(e.target.value)}
                value={cep}
               
                
                containerProps={{ style: { gridArea: "cep" } }}
              />
              <Input
                placeholder="Rua"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
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
              />
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>
      <Cart/> 
  
    </Container>
  );
};

export default Form;
