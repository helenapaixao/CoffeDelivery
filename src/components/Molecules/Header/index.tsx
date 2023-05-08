import Logo from '../../../assets/logo.svg'
import {Image, Container} from './styles'

export const  Header = () => {
  return (
    <Container>
    <Image src={Logo} />
    </Container>
   
  )
}