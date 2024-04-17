import React, { useEffect, useState } from "react";
import Logo from "@assets/logo.svg";
import { Image, Container, Aside } from "./styles";
import { Button } from "../../Atoms/Button";
import { BsCartFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";

export const Header = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        getUserCityAndState(latitude, longitude);
      });
    }
  }, []);

  const getUserCityAndState = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?key=ec7758ac89324cbab7e4d86369d6f802&q=${latitude}0%2C+${longitude}&pretty=1&no_annotations=1
        `
      );
      console.log(response.data);
      const { city, state } = response.data.results[0].components;
      setUserLocation(`${city}, ${state}`);
    } catch (error) {
      console.error("Error fetching user location:", error);
    }
  };

  return (
    <Container>
      <Image src={Logo} />
      <div
        style={{
          flexDirection: "row",
          marginLeft: "12px",
        }}
      ></div>
      <Aside>
        <Button
          hasIcon={true}
          onPress={() => null}
          size="m"
          icon={<FaLocationDot />}
          title={userLocation ? userLocation : "Obtendo localização..."}
        />

        <Button
          hasIcon={true}
          onPress={() => null}
          size="s"
          icon={<BsCartFill />}
        />
      </Aside>
    </Container>
  );
};
