import { useState } from "react";
import { Container, Button, Text } from "./styles";

type ContadorProps = {
  initialValue?: number;
  onIncrement?: (value: number) => void;
  onDecrement?: (value: number) => void;
};

export const Contador = ({
  initialValue, onIncrement, onDecrement
}: ContadorProps) => {
  const [contadorValue, setContadorValue] = useState(initialValue || 0);

  function incrementar() {
    setContadorValue(contadorValue + 1);
    if(onIncrement) {
      onIncrement(contadorValue + 1)
    }
  }

  const decrementar = () => {
    if (contadorValue > 0) {
      setContadorValue(contadorValue - 1);
      if (onDecrement) {
        onDecrement(contadorValue - 1);
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
