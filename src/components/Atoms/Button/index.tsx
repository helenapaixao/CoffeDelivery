import { Container, IconContainer, Title } from "./styles";

export type ButtonProps = {
  size: "s" | "m" | "l";
  icon?: React.ReactNode;

  onPress: () => void;
  title?: string;
};

export const Button = ({ size, icon, onPress, title }: ButtonProps) => {
  return (
    <Container onPress={onPress} size={size}>
      {icon && <IconContainer size={size}>{icon}</IconContainer>}
      <Title size="s" hasIcon={true}>
        {title}
      </Title>
    </Container>
  );
};
