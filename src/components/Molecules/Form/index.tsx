import { AddressForm, AndressContainer, Container, InfoContainer } from "./styles";
import { Input } from "../../Atoms/Input";
import { MapPin } from "@phosphor-icons/react";

export const Form = () => {
  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <form>
          <AndressContainer>
            <MapPin size={22}/>
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AndressContainer>
          <AddressForm>
          <Input
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
                /* error={Error.cep} */
             /*    {...register('cep', { valueAsNumber: true })} */
              />


          </AddressForm>

        </form>

      </InfoContainer>
    </Container>
  );
};

export default Form;
