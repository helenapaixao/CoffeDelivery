import Logo from "../../../assets/logo.svg";
import { Image, Container } from "./styles";
import { Button } from "../../Atoms/Button";
import {BsCartFill} from 'react-icons/bs'

export const Header = () => {
  return (
    <Container>
      <Image src={Logo} />
      <Button onPress={() => null} size="s" icon={BsCartFill}/>
    </Container>
  );
};
