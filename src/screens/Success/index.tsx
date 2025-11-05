import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { Container, SuccessContainer, OrderInfo as OrderInfoContainer, InfoRow } from "./styles";
import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";
import type { Order } from "../../reducers/cart/reducer";
import type { FormInputs } from "../../components/Molecules/Form";

export const Success = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { orders } = useCart();
  const navigate = useNavigate();

  const order = orders.find((o) => o.id === Number(orderId)) as (Order & FormInputs) | undefined;

  if (!order) {
    return (
      <Container>
        <SuccessContainer>
          <h1>Pedido não encontrado</h1>
          <button onClick={() => navigate("/")}>Voltar para a home</button>
        </SuccessContainer>
      </Container>
    );
  }

  const getPaymentMethodLabel = (method: string) => {
    switch (method) {
      case "credit":
        return "Cartão de Crédito";
      case "debit":
        return "Cartão de Débito";
      case "cash":
        return "Dinheiro";
      default:
        return method;
    }
  };

  return (
    <Container>
      <SuccessContainer>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <OrderInfoContainer>
          <InfoRow>
            <div style={{ backgroundColor: "#8047F8", borderRadius: "50%", padding: "8px" }}>
              <MapPin size={16} color="#FFF" weight="fill" />
            </div>
            <div>
              <p>
                Entrega em <strong>{order.street}, {order.number}</strong>
              </p>
              <p>
                {order.neighborhood} - {order.city}, {order.state}
              </p>
            </div>
          </InfoRow>

          <InfoRow>
            <div style={{ backgroundColor: "#DBAC2C", borderRadius: "50%", padding: "8px" }}>
              <Timer size={16} color="#FFF" weight="fill" />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </InfoRow>

          <InfoRow>
            <div style={{ backgroundColor: "#C47F17", borderRadius: "50%", padding: "8px" }}>
              <CurrencyDollar size={16} color="#FFF" weight="fill" />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{getPaymentMethodLabel(order.paymentMethod)}</strong>
              </p>
            </div>
          </InfoRow>
        </OrderInfoContainer>
      </SuccessContainer>
    </Container>
  );
};

export default Success;

