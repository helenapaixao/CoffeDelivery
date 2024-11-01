import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddressForm,
  AndressContainer,
  Container,
  PaymentContainer,
  PaymentHeading,
  PaymentOptions,
  InfoContainer,
  AdressHeading,
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
import { Cart } from "../Cart";

export type FormInputs = {
  cep: string;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
};

const newOrder = z.object({
  cep: z.string().min(1, "CEP deve ser um número"),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  fullAddress: z.string().min(1, "Informe o complemento"),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  state: z.string().min(1, "Informe o estado"),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

interface AddressData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  ddd: string;
  estado: string;
  ibge: string;
  localidade: string;
  regiao: string;
  uf: string;
}

const shippingPrice = 3.5;

const formatCEP = (value: string) => {
  return value.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2');
}

export const Form = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  });

  const selectedPaymentMethod = watch("paymentMethod");

  const fetchAddress = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) throw new Error("Erro ao buscar endereço");

      const data: AddressData = await response.json(); 
      console.log("endereco", data)

      if (!data.erro) {
        setValue("street", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("state", data.uf);
        setValue("fullAddress", "");
        setValue("number", ""); 
      } else {
        console.error("Endereço não encontrado.");
        setValue("street", "");
        setValue("neighborhood", "");
        setValue("city", "");
        setValue("state", "");
        setValue("fullAddress", "");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setValue("street", "");
      setValue("neighborhood", "");
      setValue("city", "");
      setValue("state", "");
      setValue("fullAddress", "");
    }
  };

  const cep = watch("cep");
  if (cep && cep.length === 8) { 
    fetchAddress(cep);
  }

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
                error={errors.cep}
                {...register('cep', { valueAsNumber: true })}
                containerProps={{ style: { gridArea: "cep" } }}
              />
              <Input
                placeholder="Rua"
                containerProps={{ style: { gridArea: "street" } }}
                type="text"
                error={errors.street}
                {...register("street")}
              />
              <Input
                placeholder="Número"
                containerProps={{ style: { gridArea: "number" } }}
                error={errors.number}
                {...register("number")}
              />
              <Input
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: "fullAddress" } }}
                error={errors.fullAddress}
                {...register("fullAddress")}
              />
              <Input
                placeholder="Bairro"
                containerProps={{ style: { gridArea: "neighborhood" } }}
                error={errors.neighborhood}
                {...register("neighborhood")}
              />
              <Input
                placeholder="Cidade"
                containerProps={{ style: { gridArea: "city" } }}
                error={errors.city}
                {...register("city")}
              />
              <Input
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: "state" } }}
                error={errors.state}
                {...register("state")}
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
                isSelected={selectedPaymentMethod === "credit"}
                onPress={() => {}}
                hasIcon
                icon={<CreditCard size={22} />}
                title="Cartão de crédito"
              />
              <ButtonCart
                isSelected={selectedPaymentMethod === "debit"}
                onPress={() => {}}
                hasIcon
                title="Cartão de débito"
                icon={<Bank size={22} />}
              />
              <ButtonCart
                icon={<Money size={22} />}
                onPress={() => {}}
                title="Dinheiro"
                hasIcon={true}
                isSelected={selectedPaymentMethod === "cash"}
              />
              {errors.paymentMethod ? (
                <span>{errors.paymentMethod.message}</span>
              ) : null}
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>
      <Cart />
    </Container>
  );
};

export default Form;
