import { Container } from "./styles";

export type ImageProps = {
  width: string;
  height: string;
  src: string;
}

export const Image = ({ width, height, src}: ImageProps) => {
  return (
    <Container>
    <img  src={src} width={width} height={height}/>
    </Container>
  )
}