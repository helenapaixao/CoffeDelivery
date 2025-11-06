import { useEffect, useRef } from 'react';
import { Container } from './styles';
import { CheckCircle } from '@phosphor-icons/react';

export type ToastProps = {
  message: string;
  onClose: () => void;
  duration?: number;
};

export const Toast = ({ message, onClose, duration = 3000 }: ToastProps) => {
  const onCloseRef = useRef(onClose);
  
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onCloseRef.current();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <Container>
      <CheckCircle size={24} weight="fill" />
      <span>{message}</span>
    </Container>
  );
};

