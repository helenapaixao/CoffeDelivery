import {
  Container
} from './styles';
import { Image } from "../Image";
import {Background} from '../../../assets/Background.png';


export const Banner = () => {
  return (
    <Container>
      <Image src={Background} width='12px'  height='20px'/>
      <h1>Banner</h1>
    </Container>
  );
}

export default Banner;


