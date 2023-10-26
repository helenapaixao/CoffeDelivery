import styled from "styled-components";

export const Container = styled.div`
  background-color: #f3f2f2;
  width: 256px;
  height: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  display: flex; /* Make the button a flex container */
  justify-content: space-between; /* Spread the elements apart */
`;

export const Title = styled.h1`
  font-family: "Baloo 2", cursive;
  font-weight: 700;
  font-size: 20px;
  color: #403937;
`;

export const SubTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #8d8686;
`;

export const Price = styled.span`
  font-family: "Baloo 2", cursive;
  font-weight: 800;
  font-size: 24px;
  color: #574f4d;
`;

export const Image = styled.img`
  margin: 0 auto;
`;

export const Footer = styled.div`
  display: flex;
 align-items: row ;
 justify-content: space-between ;
`;

export const TextPrice = styled.span` 
  font-family: "Baloo 2", cursive;
  font-weight: 100;
  font-size: 14px;
  color: #574f4d;
`;

export const DivTag = styled.div`
align-items: center;
justify-content: center ;
display: flex;
`;

