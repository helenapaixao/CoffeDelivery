import React, { useState } from "react";
import { Container, Button, Text } from "./styles";

export const Contador = () => {
  const [contadorValue, setContadorValue] = useState(0);

  function incrementar() {
    setContadorValue(contadorValue + 1);
  }

  function decrementar() {
    if (contadorValue > 0) {
      setContadorValue(contadorValue - 1);
    }
  }

  return (
    <Container>
      <Button onClick={decrementar}>-</Button>
      <Text>{contadorValue}</Text>
      <Button onClick={incrementar}>+</Button>
    </Container>
  );
};
