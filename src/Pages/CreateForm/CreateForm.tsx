import React, { useEffect, useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import InputText from "../../components/InputText/InputText";
import ButtonAction from "../../components/ButtonAction/ButtonAction";
import LabelForm from "../../components/LabelForm/LabelForm";
import { useParams } from "react-router-dom";

import { StarType } from "../../utils/types";

export const CreateForm = () => {
  const [mongoId, setMongoId] = useState();
  const [name, setName] = useState<string>("");
  const [latinName, setlatinName] = useState<string>("");
  const [linkToPhoto, setLinkToPhoto] = useState<string>("");
  const [constellation, setconstellation] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { id } = useParams();
  console.log(id);

  const data: StarType = {
    name,
    latinName,
    linkToPhoto,
    constellation,
    description,
  };

  const toast = useToast();
  const showToast = () =>
    toast({
      title: "Sukces",
      description: "Nowa gwiazda została pomyślnie dodana do bazy",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

  const successFetch = () => {
    if (!id) {
      setName("");
      setlatinName("");
      setLinkToPhoto("");
      setconstellation("");
      setDescription("");

      showToast();
    }
  };

  const postData = () => {
    // Jeśli jest ID tzn. że edytujemy więc url dal edycji, w przeciwnym razie dodawanie
    const urlCreateStar = "http://localhost:4000/library-stars/add";
    const urlUpdateStar = `http://localhost:4000/library-stars/data/update/${id}`;
    fetch(id ? urlUpdateStar : urlCreateStar, {
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

  // Pobieranie danych na temat gwiazdy w przypadku jej edycji
  useEffect(() => {
    if (id) {
      const urlStarData = `http://localhost:4000/library-stars/data/${id}`;
      fetch(urlStarData, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => {
          try {
            const {
              _id,
              name,
              latinName,
              linkToPhoto,
              constellation,
              description,
            } = res.data[0];
            console.log(res.data[0]);
            setMongoId(_id);
            name && setName(name);
            latinName && setlatinName(latinName);
            linkToPhoto && setLinkToPhoto(linkToPhoto);
            constellation && setconstellation(constellation);
            description && setDescription(description);
          } catch (error) {
            console.log(error);
          }
        })

        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <Stack w="100%" maxW="1200px" marginTop="140px !important" spacing={4}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Stack spacing="16px">
          <LabelForm text="Nazwa"></LabelForm>
          <InputText
            value={name}
            placeholder="W języku aplikacji"
            onChange={(e) => setName(e.target.value)}
            isRequired={true}
          />
          <InputText
            value={latinName}
            placeholder="Łacińska nazwa"
            onChange={(e) => setlatinName(e.target.value)}
            isRequired={true}
          />
        </Stack>
        <Stack spacing="16px">
          <LabelForm text="Dodatkowe informacje"></LabelForm>
          <InputText
            value={linkToPhoto}
            placeholder="Link do zdjęcia"
            onChange={(e) => setLinkToPhoto(e.target.value)}
            isRequired={true}
          />
          <InputText
            value={constellation}
            placeholder="Konstelacja gwiazdy"
            onChange={(e) => setconstellation(e.target.value)}
            isRequired={true}
          />
        </Stack>
      </SimpleGrid>
      <Stack spacing="16px">
        <LabelForm text="Dodatkowy opis"></LabelForm>
        <InputText
          value={description}
          placeholder="Dodatkowy opis"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Stack>
      <Flex justifyContent="flex-end">
        {id ? (
          <Box>
            <ButtonAction
              handleClick={postData}
              label="Aktualizuj"
              variant={false}
            />
          </Box>
        ) : (
          <ButtonAction handleClick={postData} label="Zapisz" variant={true} />
        )}
      </Flex>
    </Stack>
  );
};

export default CreateForm;
