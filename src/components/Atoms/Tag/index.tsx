import { Container } from './styles';
import {TextTag} from './styles'

type TagProps = {
  children: React.ReactNode;
}

export const Tag = ( {children}: TagProps) => {
  return (
    <Container>
      <TextTag>
        {children}
      </TextTag>
    </Container>
  )
}