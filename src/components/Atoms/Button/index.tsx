import { Container, IconContainer, Title } from "./styles";

export type ButtonProps = {
  size: "s" | "m" | "l";
  icon?: React.ReactNode;
  onPress: () => void;
  title?: string;
  hasIcon?: boolean;
};

export const Button = ({ size, icon, onPress, title }: ButtonProps) => {
  return (
    <Container onPress={onPress} size={size}>
      {icon && <IconContainer size={size}>{icon}</IconContainer>}
      <Title size={size} hasIcon={!!icon}>
        {title}
      </Title>
    </Container>
  );
};
