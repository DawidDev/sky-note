import { VStack, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ItemListSm from "../../components/ItemListSm/ItemListSm";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import { Observation } from "../../utils/types";

const LibraryStars = () => {
  const [data, setData] = useState([]);
  const [isFetched, setIsFetched] = useState(false); // do zrobienia w komunikat w przypadku braku gwiazd
  const url = "http://localhost:4000/observation-list";

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res.data))

      .catch((error) => console.log(error));
  }, []);

  const starsCollection = data.map((el, index) => {
    const { _id, date, location, weatherConditions }: Observation = el;
    return (
      <ItemListSm
        key={index}
        link={`/observation-list/${_id}`}
        data={[
          date ?? "data",
          location.exactLocation ?? "lokalizacja",
          location.closestCity ?? "lokalizacja",
          weatherConditions.temperature ?? "temperatura",
          weatherConditions.visibility ?? "widocznosć",
        ]}
      />
    );
  });

  console.log(data);
  return (
    <Stack w="100%" maxW="1200px" marginTop="140px !important" spacing={4}>
      {data.length > 0 ? starsCollection : <LoadingSpinner />}
    </Stack>
  );
};

export default LibraryStars;
