import { Image, Container, Aside } from "./styles";
import { Button } from "../../Atoms/Button";
import { BsCartFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import useUserLocation from "../../../hooks/useUserLocation";
import Logo from "../../../assets/logo.svg";


export const Header = () => {
  const userLocation = useUserLocation();

  return (
    <Container>
      <Image src={Logo} />
      <div
        style={{
          flexDirection: "row",
          marginLeft: "12px",
        }}
      ></div>
      <Aside>
        <Button
          hasIcon={true}
          onPress={() => null}
          size="m"
          icon={<FaLocationDot />}
          title={userLocation ? userLocation : "Obtendo localização..."}
        />

        <Button
          hasIcon={true}
          onPress={() => null}
          size="s"
          icon={<BsCartFill />}
        />
      </Aside>
    </Container>
  );
};
