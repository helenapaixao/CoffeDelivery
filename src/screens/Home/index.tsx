import { Header } from "../../components/Molecules/Header";
import { Content } from "./styles";
import { Card } from "../../components/Atoms/Card";
import Coffee from "../../assets/Coffee.svg";
import Banner from "../../components/Atoms/Banner";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Content>
        <Card
          tagTexts={["TRADICIONAL", "COM LEITE", "GELADO"]}
          src={Coffee}
          title="Expresso Americano"
          content="Expresso diluído, menos intenso que o tradicional"
          price="9,90"
        />
      </Content>
    </>
  );
};
