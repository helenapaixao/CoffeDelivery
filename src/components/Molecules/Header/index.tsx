import { Image, Container, Aside, CartButtonWrapper, Badge } from "./styles";
import { Button } from "../../Atoms/Button";
import { BsCartFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import useUserLocation from "../../../hooks/useUserLocation";
import Logo from "../../../assets/logo.svg";
import { useCart } from "../../../hooks/useCart";
import { useNavigate } from "react-router-dom";




export const Header = () => {
  const { cart } = useCart();
  const userLocation = useUserLocation();
  const navigate = useNavigate();

  const totalItems = cart?.reduce((total, item) => total + item.quantity, 0) || 0;

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

        <CartButtonWrapper>
          <Button
            hasIcon={true}
            onPress={() => {
              navigate('/checkout');
            }}
            
            size="s"
            icon={<BsCartFill />}
          />
          {totalItems > 0 && <Badge>{totalItems}</Badge>}
        </CartButtonWrapper>
      </Aside>
    </Container>
  );
};
