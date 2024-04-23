import { Container } from "./styles";
import { Input } from "../../Atoms/Input";

export const Form = () => {
  return (
    <Container>
      <Input placeholder="CEP" type="number" />
    </Container>
  );
};

export default Form;
