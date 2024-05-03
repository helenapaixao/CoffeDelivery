import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const Container = styled.main`
  display: flex;
  max-width: 1160px;
  padding: 40px 20px;
  margin: 0 auto;
  gap: 32px;
`;

export const FormsContainer = styled.div`
  padding: 40px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors["base-card"]};
  width: 100%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const AndressContainer = styled(FormsContainer)``;

export const Heading = styled.div`
  display: flex;
  gap: 8px;

  div {
    span {
      color: ${({ theme }) => theme.colors["base-text"]};
    }
    p {
      ${mixins.fonts.textS};
    }
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number fullAddress fullAddress"
    "neighborhood city state";
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`;

export const PaymentContainer = styled(FormsContainer)``;

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    ${mixins.fonts.titleXS};
    color: ${({ theme }) => theme.colors["base-text"]};
  }
  > form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;
export const AdressHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`