import { Tag } from "../Tag";
import { Container, DivTag, SubTitle, Price, Title, Footer } from "./styles";
import { Contador } from "../Contador";
import { Image } from "../Image";
import { FaShoppingCart } from "react-icons/fa";
import { ButtonCard } from "../../Molecules/ButtonCard";
import { useState } from "react";
import { useCart } from "../../../hooks/useCart";
import type { Coffee } from "../../../@types/coffee";
import { formatBRL } from "../../../utils/format";

type Props = {
  coffee: Coffee;
};

export const Card = ({ coffee }: Props) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(0);

  function handleAddToCart() {
    if (quantity > 0) {
      addItem({ id: coffee.id, quantity });
      setQuantity(0); // Resetar quantidade após adicionar
    }
  }

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
          <span>{formatBRL(coffee.price)}</span>
        </Price>

        <Contador
          initialValue={quantity}
          onIncrement={(value) => setQuantity(value)}
          onDecrement={(value) => setQuantity(value)}
        />
        <ButtonCard
          size="s"
          onPress={handleAddToCart}
          icon={<FaShoppingCart />}
        />
      </Footer>
    </Container>
  );
};
