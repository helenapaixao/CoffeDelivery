import { Tag } from "../Tag";
import { Container, DivTag, SubTitle, Price, Title, Footer } from "./styles";
import { Contador } from "../Contador";
import { Image } from "../Image";
import { ButtonCart } from "../../Molecules/ButtonCart";
import { FaShoppingCart } from "react-icons/fa";

type Props = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

export const Card = ({ coffee }: Props) => {
  return (
    <Container>
      <Image src={coffee.image} height="120" width="120" />
      <DivTag>
        {coffee.tags.map((tags) => (
          <Tag key={tags}>{tags}</Tag>
        ))}
      </DivTag>
      <Title>{coffee.title}</Title>
      <SubTitle>{coffee.description}</SubTitle>

      <Footer>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Contador />
        <ButtonCart onPress={() => null} icon={<FaShoppingCart />} />
      </Footer>
    </Container>
  );
};
