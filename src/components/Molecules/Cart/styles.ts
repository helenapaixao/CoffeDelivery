import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

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

export const CartTotal = styled.div`
  padding: 40px;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors["base-card"]};
  width: 100%;
  min-width: 448px;
`;

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 64px;
      height: 64px;
    }

    display: flex;
    //align-items: stretch;
    gap: 10px;

    > div {
      display: flex;
      flex-direction: column;
      //justify-content: space-between;
      > span {
        margin-left: 30px;
      }
    }
  }

  > aside {
    flex-direction: row;
    font-weight: bold;
  }
`;

export const CoffeInfo = styled.div`
  display: flex;
  gap: 8px;

  > button {
    width: 91px;
    height: 32px;
    transition: all 0.2s;
    background-color: #e6e5e5;

    > h1 {
      font-size: 12px;
      margin-left: 1px;
    }

    > span {
      ${mixins.fonts.buttonM};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors["base-text"]};
    }
  }
`;
