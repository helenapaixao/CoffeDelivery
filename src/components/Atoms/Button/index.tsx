import {ButtonHTMLAttributes} from 'react';
import { Container } from './styles';

type ButtonProps = {
  children?: React.ReactNode;
  size: 'small' | 'medium'
  icon?: JSX.Element;

}

export const Button = ({children, size= 'small', icon, ...props}: ButtonProps) => {
  return (
    <Container>
    <button>teste</button>
    </Container>
  )
}