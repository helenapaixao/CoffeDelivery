import { Container, IconContainer } from "./styles";

export type ButtonProps = {
  icon?: React.ReactNode;
  onPress: () => void;
  title?: string;
  hasIcon?: boolean;
};

export const ButtonCart = ({ icon, onPress }: ButtonProps) => {
  return (
    <Container onPress={onPress}>
      {icon && <IconContainer>{icon}</IconContainer>}
    </Container>
  );
};
