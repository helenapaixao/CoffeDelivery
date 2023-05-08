import React from "react";
import { Tag } from "../Tag";
import { Container, SubTitle, Price, Title,ContainerImage } from "./styles";
import { Contador } from "../Contador";
import {Image} from '../Image'
import Coffee from '../../../assets/Coffee.svg'
import { ImageProps } from "../Image";
type CardProps = {
  title: string;
  content: string;
  price: string;
  image: ImageProps;
  src: string
};

export const Card = ({ title, content, src, price}: CardProps) => {
  return (
    <Container>
      <ContainerImage>
      <Image src={src} height="120" width="120"/>
      </ContainerImage>
      <Tag>TRADICIONAL</Tag>
      <Title>{title}</Title>
      <SubTitle>{content}</SubTitle>
      <Price>R${price}</Price>
      <Contador/>

    </Container>
  );
};
