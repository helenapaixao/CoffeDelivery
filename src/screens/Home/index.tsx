import React from "react";
import { Header } from "../../components/Molecules/Header";
import Intro from "../../assets/Imagem.svg";
import { Content } from "./styles";
import { Tag } from "../../components/Atoms/Tag";
import { Card } from "../../components/Atoms/Card";
import * as coffe from  '../../assets/Coffee.png'
import { Contador } from "../../components/Atoms/Contador";
import Coffee from '../../assets/Coffee.svg'

export const Home = () => {
  return (
    <>
      <Header />
      <Content>
        <img src={Intro} />
        <Card tagText="TRADICIONAL" src={Coffee} title="Expresso Americano" content="Expresso diluído, menos intenso que o tradicional" price="9,90"/>
      </Content>
    </>
  );
};
