import React, { useState } from "react";
import {
  Stack,
  FormControl,
  Flex,
  Box,
  SimpleGrid,
  FormLabel,
  Text,
  Button,
  Toast,
  Input,
  useToast,
} from "@chakra-ui/react";
import InputText from "../../components/InputText/InputText";
import ButtonAction from "../../components/ButtonAction/ButtonAction";
import LabelForm from "../../components/LabelForm/LabelForm";

import { Observation } from "../../utils/types";

export const CreateObservation = () => {
  const [date, setDate] = useState("");
  const [closestCity, setClosestCity] = useState<string>("");
  const [exactLocation, setExactLocation] = useState<string>("");
  const [cloudLevel, setCloudLevel] = useState<string>("");
  const [precipitation, setPrecipitation] = useState<string>("");
  const [wind, setWind] = useState<string>("");
  const [temperature, setTemperature] = useState<string>("");
  const [fogDensity, setFogDensity] = useState<string>("");
  const [visibility, setVisibility] = useState<string>("");
  const [phaseOfTheMoon, setPhaseOfTheMoon] = useState<string>("");
  const [visibilityStars, setVisibilityStars] = useState<string>(""); // useState<Array<string>>([]);

  const data: Observation = {
    date,
    location: {
      closestCity,
      exactLocation,
    },
    weatherConditions: {
      cloudLevel, 
      precipitation,
      wind,
      temperature, 
      fogDensity, 
      visibility,
      phaseOfTheMoon,
    },
    visibilityStars,
  };

  const toast = useToast();
  const showToast = () =>
    toast({
      title: "Sukces",
      description: "Nowa obserwacja została pomyślnie dodana do bazy",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

  const successFetch = () => {
    showToast();
  };

  const url = "http://localhost:4000/observe/add";

  const postData = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.status === 200 && successFetch();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Stack w="100%" maxW="1200px" marginTop="140px !important" spacing={4}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Stack spacing="16px">
          <LabelForm text="Czas"></LabelForm>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <LabelForm text="Lokalizacja obserwacji"></LabelForm>
          <InputText
            value={closestCity}
            placeholder="Najbliższe miasto"
            onChange={(e) => setClosestCity(e.target.value)}
            isRequired={true}
          />
          <InputText
            value={exactLocation}
            placeholder="Dokładna lokalizacja"
            onChange={(e) => setExactLocation(e.target.value)}
            isRequired={true}
          />
          <LabelForm text="Widoczne gwiazdy"></LabelForm>
          <InputText
            value={visibilityStars}
            placeholder="Widoczne gwiazdy"
            onChange={(e) => setVisibilityStars(e.target.value)}
            isRequired={true}
          />
        </Stack>
        <Stack spacing="16px">
          <LabelForm text="Warunki atmosferyczne"></LabelForm>
          <InputText
            value={cloudLevel}
            placeholder="Poziom zachmurzenia"
            onChange={(e) => setCloudLevel(e.target.value)}
            isRequired={true}
          />
          <InputText
            value={precipitation}
            placeholder="Opady"
            onChange={(e) => setPrecipitation(e.target.value)}
            isRequired={true}
          />
          <InputText
            value={wind}
            placeholder="Wiatr"
            onChange={(e) => setWind(e.target.value)}
            isRequired={true}
          />
          <InputText
            value={temperature}
            placeholder="Temperatura"
            onChange={(e) => setTemperature(e.target.value)}
            isRequired={true}
          />
          <InputText
            value={fogDensity}
            placeholder="Gęstość mgły"
            onChange={(e) => setFogDensity(e.target.value)}
            isRequired={true}
          />
          <InputText
            value={visibility}
            placeholder="Widoczność"
            onChange={(e) => setVisibility(e.target.value)}
            isRequired={true}
          />
          <InputText
            value={phaseOfTheMoon}
            placeholder="Faza księżyca"
            onChange={(e) => setPhaseOfTheMoon(e.target.value)}
            isRequired={true}
          />
        </Stack>
      </SimpleGrid>

      <Flex justifyContent="flex-end">
        <ButtonAction handleClick={postData} label="Zapisz" variant={true} />
      </Flex>
    </Stack>
  );
};

export default CreateObservation;
