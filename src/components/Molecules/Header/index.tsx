import Logo from "@assets/logo.svg";
import { Image, Container } from "./styles";
import { Button } from "../../Atoms/Button";
import {BsCartFill} from 'react-icons/bs'
import { FaLocationDot } from "react-icons/fa6";
export const Header = () => {
  return (
    <Container>
      <Image src={Logo} />
      <div style={{
        flexDirection: 'row',
        marginLeft: '12px' 
      }}>
      <Button hasIcon={true} onPress={() => null} size="m" icon={<FaLocationDot/> } title="Porto Alegre, RS"/>

      </div>
      <Button hasIcon={true} onPress={() => null} size="s" icon={<BsCartFill/> } />
    </Container>
  );
};
