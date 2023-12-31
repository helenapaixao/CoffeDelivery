import { Tag } from "../Tag";
import {
  Container,
  DivTag,
  SubTitle,
  Price,
  Title,
  Footer,
  TextPrice,
} from "./styles";
import { Contador } from "../Contador";
import { Image } from "../Image";
import { ButtonCart } from "../../Molecules/ButtonCart";
import { FaShoppingCart } from "react-icons/fa";
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
      <DivTag>
        <Tag>{tagText}</Tag>
      </DivTag>
      <Title>{title}</Title>
      <SubTitle>{content}</SubTitle>

      <Footer>
          <TextPrice>
            R$ <Price>{price}</Price>
          </TextPrice>

        <Contador />
        <ButtonCart onPress={() => null} icon={<FaShoppingCart />} />
      </Footer>
    </Container>
  );
};
