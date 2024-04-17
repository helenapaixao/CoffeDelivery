import { Header } from "../../components/Molecules/Header";
import { CoffeeList, Content } from "./styles";
import { Card } from "../../components/Atoms/Card";
import { coffees } from "../../../data.json";
import { Banner } from "../../components/Atoms/Banner";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner/>
      <Content>
        <CoffeeList>
        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
        </CoffeeList>
        
      </Content>
    </>
  );
};
