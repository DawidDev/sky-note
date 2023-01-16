import React from "react";
import {
  Box,
  Stack,
  Flex,
  Text,
  SimpleGrid,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Icon from "@mdi/react";
import { mdiCloudArrowUp, mdiAccountCheck, mdiGoogleAnalytics } from "@mdi/js";

const FeatureBox = ({ text }: any) => {
  return (
    <Box mb="84px">
      <SimpleGrid
        columns={{
          base: 1,
          md: 3,
        }}
        w="100%"
        maxW="1200px"
        spacing="24px"
      >
        <VStack justifyContent="center">
          <Box maxW="80px">
            <Icon path={mdiCloudArrowUp} size="100%" color="#B649DE" />
          </Box>
          <Text fontSize="22px" fontWeight="600">
            Dane w chmurze
          </Text>
        </VStack>
        <VStack justifyContent="center">
          <Box maxW="80px">
            <Icon path={mdiAccountCheck} size="100%" color="#B649DE" />
          </Box>
          <Text fontSize="22px" fontWeight="600">
            Dane w chmurze
          </Text>
        </VStack>
        <VStack justifyContent="center">
          <Box maxW="80px">
            <Icon path={mdiGoogleAnalytics} size="100%" color="#B649DE" />
          </Box>
          <Text fontSize="22px" fontWeight="600">
            Dane w chmurze
          </Text>
        </VStack>
      </SimpleGrid>
      <Text textAlign="center" maxW="800px" mt="36px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit
        quam id scelerisque finibus. Suspendisse potenti. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur
      </Text>
    </Box>
  );
};
export default FeatureBox;
