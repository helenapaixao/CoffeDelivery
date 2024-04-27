import { Container, IconContainer } from "./styles";

export type ButtonProps = {
  size: "s" | "m" | "l";
  icon?: React.ReactNode;
  onPress: () => void;
  hasIcon?: boolean;
};

export const ButtonCard = ({ size, icon, onPress }: ButtonProps) => {
  return (
    <Container onPress={onPress} size={size}>
      {icon && <IconContainer size={size}>{icon}</IconContainer>}
    </Container>
  );
};
