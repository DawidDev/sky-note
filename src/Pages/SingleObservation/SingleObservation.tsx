import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import RaportItem from "../../components/RaportItem/RaportItem";
import { Flex, Stack, useToast } from "@chakra-ui/react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Observation } from "../../utils/types";
import ButtonAction from "../../components/ButtonAction/ButtonAction";

const SingleObservation = () => {
  const { id } = useParams();
  const [data, setData] = useState<Array<Observation>>();

  console.log(data)

  //const navigate = useNavigate();

  const url = `http://localhost:4000/observation-list/${id}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res.data))

      .catch((error) => console.log(error));
  }, []);

  const toast = useToast();
  const showToast = () =>
    toast({
      title: "Usunięto",
      description: "Obserwacja została usunięta z bazy",
      status: "success",
      duration: 9000,
      isClosable: true,
    });


  const deleteObservation = () => {
    showToast()
    const urlDelete = `http://localhost:4000/observation-list/delete/${id}`
    fetch(urlDelete, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res.status)
      })

      .catch((error) => console.log(error));
      //navigate("/observation-list");
      return redirect('/observation-list')
  }

  return (
    <Stack w="100%" maxW="1200px" px="20px" spacing={4}>
      {data ? (
        <>
          {data[0].weatherConditions.cloudLevel && (
            <RaportItem
              variantItem={1}
              number={data[0].weatherConditions.cloudLevel}
              label="Poziom zachmurzenia"
              tooltipContent="Informacje dodatkowe"
              maxNumber={10}
            />
          )}

          <RaportItem
            variantItem={2}
            label="Warunki atmosferyczne"
            tooltipContent="Warunki atmosferycznie panujące podczas obserwacji"
            dataText={[
              `opady: ${[
                data[0].weatherConditions.precipitation.toLowerCase(),
              ]}`,
              `wiatr: ${[data[0].weatherConditions.wind]}`,
              `mgła: ${[data[0].weatherConditions.fogDensity.toLowerCase()]}`,
              `temeratura: ${[data[0].weatherConditions.temperature]} °C`,
            ]}
          />
          {data[0].weatherConditions.phaseOfTheMoon && (
            <RaportItem
              variantItem={3}
              label="Faza księżyca"
              tooltipContent="Faza księżyca wyrażona w klasycznej skali"
              phaseOnMoon={data[0].weatherConditions.phaseOfTheMoon}
            />
          )}
          {data[0].weatherConditions.visibility && (
            <RaportItem
              variantItem={1}
              number={data[0].weatherConditions.visibility}
              label="Widoczność"
              tooltipContent="Przejrzystość powietrza, widoczność podczas obserwacji. Im wyższa liczba tym gorsza widoczność."
              maxNumber={10}
            />
          )}

          {data[0].weatherConditions.fogDensity && (
            <RaportItem
              variantItem={1}
              number={data[0].weatherConditions.fogDensity}
              label="Gęstość mgły"
              tooltipContent="Gęstość mgły wyrażona w skali od 1-10. Im wyższa liczba tym silniejsza mgła."
              maxNumber={10}
            />
          )}
          <RaportItem
              variantItem={4}
              number={data[0].weatherConditions.fogDensity}
              label="Widoczne gwiazdy"
              tooltipContent="Widoczne gwiazdy podczas obserwacji. Dostępne są tylko te które są zdefiniowane w bazie danych."
              dataStars={data[0].visibilityStars}
            />
        </>
      ) : (
        <LoadingSpinner />
      )}
      <Flex justifyContent="flex-end" pt="50px">
        <ButtonAction
          label="Usuń obserwacje"
          handleClick={deleteObservation}
          variant={true}
        />
      </Flex>
    </Stack>
  );
};

export default SingleObservation;

/*

interface ButtonActionProps {
  label: string;
  handleClick: () => void;
  variant?: boolean;
  isBig?: boolean;
}
*/
