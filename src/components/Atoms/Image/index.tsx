
export type ImageProps = {
  width: string;
  height: string;
  src: string;
}

export const Image = ({ width, height, src}: ImageProps) => {
  return (
    <img  src={src} width={width} height={height}/>
  )
}