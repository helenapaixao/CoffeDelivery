import React from "react";
import { Tag } from "../Tag";
import { Container, SubTitle, Price, Title, ContainerImage } from "./styles";
import { Contador } from "../Contador";
import { Image } from "../Image";
type CardProps = {
  title: string;
  content: string;
  price: string;
  src: string;
  tagText: string;
};

export const Card = ({ title, content, src, price, tagText }: CardProps) => {
  return (
    <Container>
      <ContainerImage>
        <Image src={src} height="120" width="120" />
      </ContainerImage>
      <Tag>{tagText}</Tag>
      <Title>{title}</Title>
      <SubTitle>{content}</SubTitle>
      <Price>R${price}</Price>
      <Contador />
    </Container>
  );
};
