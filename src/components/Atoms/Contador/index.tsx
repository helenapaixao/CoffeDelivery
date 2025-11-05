import { useState, useEffect } from "react";
import { Container, Button, Text } from "./styles";

type ContadorProps = {
  initialValue?: number;
  onIncrement?: (value: number) => void;
  onDecrement?: (value: number) => void;
  min?: number;
};

export const Contador = ({
  initialValue = 0, 
  onIncrement, 
  onDecrement,
  min = 0
}: ContadorProps) => {
  const [contadorValue, setContadorValue] = useState(initialValue);

  useEffect(() => {
    setContadorValue(initialValue);
  }, [initialValue]);

  function incrementar() {
    const newValue = contadorValue + 1;
    setContadorValue(newValue);
    if(onIncrement) {
      onIncrement(newValue);
    }
  }

  const decrementar = () => {
    if (contadorValue > min) {
      const newValue = contadorValue - 1;
      setContadorValue(newValue);
      if (onDecrement) {
        onDecrement(newValue);
      }
    }
  };

  return (
    <Container>
      <Button onClick={decrementar}> - </Button>
      <Text>{contadorValue}</Text>
      <Button onClick={incrementar}>+</Button>
    </Container>
  );
};
