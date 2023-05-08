import { Tag } from "../Tag";
import { Container, SubTitle, Price, Title } from "./styles";
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
      <Image src={src} height="120" width="120" />
      <Tag>{tagText}</Tag>
      <Title>{title}</Title>
      <SubTitle>{content}</SubTitle>
      <Price>R${price}</Price>
      <Contador />
    </Container>
  );
};
