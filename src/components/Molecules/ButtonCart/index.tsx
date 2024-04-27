import { ButtonHTMLAttributes } from "react";
import { Container, IconContainer, Title } from "./styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  onPress: () => void;
  title?: string;
  hasIcon?: boolean;
  isSelected: boolean;
};

export const ButtonCart = ({ icon, onPress, title, isSelected }: ButtonProps) => {
  return (
    <Container isSelected={isSelected} onPress={onPress}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <Title  hasIcon={!!icon} size={
        icon ? 16 : 20
      }>
        {title}
      </Title>
    </Container>
  );
};
