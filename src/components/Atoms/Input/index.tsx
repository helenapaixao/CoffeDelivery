import React from "react";
import {Container} from './styles'

type InputProps = {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const Input = ({ type, value, onChange, placeholder }: InputProps) => {
  return (
    <Container
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
