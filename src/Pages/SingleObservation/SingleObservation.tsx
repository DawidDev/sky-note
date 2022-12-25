import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RaportItem from "../../components/RaportItem/RaportItem";
import { Stack } from "@chakra-ui/react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Observation } from "../../utils/types";

interface RaportItemProps {
  label: string;
  number?: number | string;
  maxNumber?: number | string;
  tooltipContent: string;
  dataText?: Array<string>;
  variantItem: 1 | 2 | 3;
  phaseOnMoon?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

const SingleObservation = () => {
  const { id } = useParams();
  const [data, setData] = useState<Array<Observation>>();

  console.log(id);

  const url = `http://localhost:4000/observation-list/${id}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res.data))

      .catch((error) => console.log(error));
  }, []);

  console.log(data);

  //const { date, location, weatherConditions, visibilityStars } = data?[0];

  return (
    <Stack w="100%" maxW="1200px" marginTop="140px !important" spacing={4}>
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
            tooltipContent="Informacje dodatkowe"
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
              tooltipContent="Informacje dodatkowe"
              phaseOnMoon={data[0].weatherConditions.phaseOfTheMoon}
            />
          )}
          {data[0].weatherConditions.visibility && (
            <RaportItem
              variantItem={1}
              number={data[0].weatherConditions.visibility}
              label="Widoczność"
              tooltipContent="Informacje dodatkowe"
              maxNumber={10}
            />
          )}

          {data[0].weatherConditions.fogDensity && (
            <RaportItem
              variantItem={1}
              number={data[0].weatherConditions.fogDensity}
              label="Gęstość mgły"
              tooltipContent="Informacje dodatkowe"
              maxNumber={10}
            />
          )}
        </>
      ) : (
        <LoadingSpinner />
      )}
    </Stack>
  );
};

export default SingleObservation;
