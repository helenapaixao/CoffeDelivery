import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { useCart } from "../../../hooks/useCart";

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

export type OrderInfo = FormInputs;

const newOrder = z.object({
  cep: z
    .string()
    .min(1, "CEP é obrigatório")
    .regex(/^\d{5}-?\d{3}$/, "CEP deve ter o formato 00000-000"),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  fullAddress: z.string().optional(),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  state: z
    .string()
    .min(2, "Informe o estado")
    .max(2, "Estado deve ter 2 letras")
    .toUpperCase(),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    required_error: "Selecione um método de pagamento",
    invalid_type_error: "Informe um método de pagamento válido",
  }),
});

interface AddressData {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  ddd?: string;
  estado?: string;
  ibge?: string;
  localidade?: string;
  regiao?: string;
  uf?: string;
  erro?: boolean;
}

const formatCEP = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 5) {
    return numbers;
  }
  return numbers.replace(/^(\d{5})(\d{3}).*/, "$1-$2");
};

export const Form = () => {
  const { checkout, cart } = useCart();
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const selectedPaymentMethod = watch("paymentMethod");
  const cep = watch("cep");
  useEffect(() => {
    if (location.search) {
      navigate(location.pathname, { replace: true });
    }
  }, []);

  useEffect(() => {
    const cleanCep = cep?.replace(/\D/g, "") || "";
    if (cleanCep.length !== 8) return;

    const timeoutId = setTimeout(() => {
      const fetchAddress = async () => {
        setIsLoadingAddress(true);
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
          if (!response.ok) throw new Error("Erro ao buscar endereço");

          const data: AddressData = await response.json();

          if (!data.erro && data.logradouro) {
            setValue("street", data.logradouro);
            setValue("neighborhood", data.bairro || "");
            setValue("city", data.localidade || "");
            setValue("state", data.uf || "");
            setValue("fullAddress", "");
            setValue("number", "", { shouldValidate: false });
          } else {
            setValue("street", "");
            setValue("neighborhood", "");
            setValue("city", "");
            setValue("state", "");
          }
        } catch (error) {
          console.error("Error fetching address:", error);
          setValue("street", "");
          setValue("neighborhood", "");
          setValue("city", "");
          setValue("state", "");
        } finally {
          setIsLoadingAddress(false);
        }
      };

      fetchAddress();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [cep, setValue]);

  const onSubmit = (data: FormInputs) => {
    if (cart.length === 0) {
      alert("Adicione itens ao carrinho antes de finalizar o pedido");
      return;
    }
    checkout(data);
  };

  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <form 
          id="order" 
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)(e);
          }}
        >
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
                placeholder="00000-000"
                type="text"
                maxLength={9}
                error={errors.cep}
                {...register("cep", {
                  onChange: (e) => {
                    const formatted = formatCEP(e.target.value);
                    setValue("cep", formatted, { shouldValidate: false });
                  },
                })}
                containerProps={{ style: { gridArea: "cep" } }}
              />
              {isLoadingAddress && (
                <span style={{ gridArea: "cep", fontSize: "12px", color: "#8047F8" }}>
                  Buscando endereço...
                </span>
              )}
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
                {...register("fullAddress", { required: false })}
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
                {...register("state", {
                  onChange: (e) => {
                    setValue("state", e.target.value.toUpperCase());
                  },
                })}
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
                onPress={() => setValue("paymentMethod", "credit")}
                hasIcon
                icon={<CreditCard size={22} />}
                title="Cartão de crédito"
              />
              <ButtonCart
                isSelected={selectedPaymentMethod === "debit"}
                onPress={() => setValue("paymentMethod", "debit")}
                hasIcon
                title="Cartão de débito"
                icon={<Bank size={22} />}
              />
              <ButtonCart
                icon={<Money size={22} />}
                onPress={() => setValue("paymentMethod", "cash")}
                title="Dinheiro"
                hasIcon={true}
                isSelected={selectedPaymentMethod === "cash"}
              />
              {errors.paymentMethod && (
                <span style={{ color: "red", fontSize: "12px", gridColumn: "1 / -1" }}>
                  {errors.paymentMethod.message}
                </span>
              )}
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>
      <Cart />
    </Container>
  );
};

export default Form;
