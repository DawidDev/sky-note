import React, { useState, useEffect } from "react";
import { Stack, Flex, SimpleGrid, Input, useToast } from "@chakra-ui/react";
import InputText from "../../components/InputText/InputText";
import ButtonAction from "../../components/ButtonAction/ButtonAction";
import LabelForm from "../../components/LabelForm/LabelForm";
import InputNumber from "../../components/InputNumber/InputNumber";

import InputSelect from "../../components/InputSelect/InputSelect";

import { Observation } from "../../utils/types";
import TitlePage from "../../components/TitlePage/TitlePage";

export const CreateObservation = () => {
  const [date, setDate] = useState("");
  const [closestCity, setClosestCity] = useState<string>("");
  const [exactLocation, setExactLocation] = useState<string>("");
  const [cloudLevel, setCloudLevel] = useState<string>("");
  const [precipitation, setPrecipitation] = useState<string>("");
  const [wind, setWind] = useState<number>(0);
  const [temperature, setTemperature] = useState<number>(0);
  const [fogDensity, setFogDensity] = useState<string>("");
  const [visibility, setVisibility] = useState<string>("");
  const [phaseOfTheMoon, setPhaseOfTheMoon] = useState<string>("");
  const [visibilityStars, setVisibilityStars] = useState([]); // useState<Array<string>>([]);

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

  console.log(data);

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

  // Pobieranie danych o gwiazdach dla listy React Select
  const [starsList, setStarsList] = useState([]);
  const urlStars = "http://localhost:4000/library-stars";

  useEffect(() => {
    fetch(urlStars, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        let options: any = [];
        res.data.forEach((opt: any) =>
          options.push({ value: `${opt._id}`, label: `${opt.name}` })
        );
        setStarsList(options);
      })

      .catch((error) => console.log(error));
  }, []);

  console.log(starsList);

  return (
    <Stack w="100%" maxW="1200px" px="20px" marginTop="140px !important" spacing={4}>
      <TitlePage text="Dodaj obserwację" />
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

          <InputSelect
            handleChange={(options: any) => setVisibilityStars(options)}
            placeholder="Widoczne gwiazdy"
            isMulti={true}
            options={starsList}
          />
        </Stack>
        <Stack spacing="16px">
          <LabelForm text="Warunki atmosferyczne"></LabelForm>
          <InputSelect
            handleChange={(option: any) => setCloudLevel(option.value)}
            placeholder="Poziom zachmurzenia"
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: "6", label: "6" },
              { value: "7", label: "7" },
              { value: "8", label: "8" },
              { value: "9", label: "9" },
              { value: "10", label: "10" },
            ]}
          />
          <InputSelect
            handleChange={(option: any) => setPrecipitation(option.value)}
            placeholder="Opady"
            options={[
              { value: "brak", label: "brak" },
              { value: "mżawka", label: "mżawka" },
              { value: "lekki opad", label: "lekki opad" },
              { value: "średni opad", label: "średni opad" },
              { value: "mocne opady", label: "mocne opady" },
              { value: "ulewny deszcz", label: "ulewny deszcz" },
              { value: "śnieg", label: "śnieg" },
              { value: "śnieżyca", label: "śnieżyca" },
            ]}
          />
          <InputNumber
            value={wind}
            onChange={(value) => setWind(value)}
            additionalText="km/h"
          />
          <InputNumber
            value={temperature}
            onChange={(value) => setTemperature(value)}
            additionalText="°C"
          />
          <InputSelect
            handleChange={(option: any) => setFogDensity(option.value)}
            placeholder="Gęstość mgły"
            options={[
              { value: "0", label: "0" },
              { value: "2", label: "2" },
              { value: "4", label: "4" },
              { value: "6", label: "6" },
              { value: "8", label: "8" },
              { value: "10", label: "10" },
            ]}
          />
          <InputSelect
            handleChange={(option: any) => setVisibility(option.value)}
            placeholder="Poziom widoczności"
            options={[
              { value: "0", label: "0" },
              { value: "2", label: "2" },
              { value: "4", label: "4" },
              { value: "6", label: "6" },
              { value: "8", label: "8" },
              { value: "10", label: "10" },
            ]}
          />
          <InputSelect
            handleChange={(option: any) => setPhaseOfTheMoon(option.value)}
            placeholder="Faza ksiezyca"
            options={[
              { value: "1", label: "pierwsza kwadra" },
              { value: "2", label: "pełny księżyc" },
              { value: "3", label: "ostatnia kwadra" },
              { value: "4", label: "zanikający półksiężyc" },
              { value: "5", label: "gubiący się księżyc" },
              { value: "5", label: "półksiężyc woskujący" },
              { value: "5", label: "woskujący księżyc" },
            ]}
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
