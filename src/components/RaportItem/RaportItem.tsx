import React from "react";
import {
  Text,
  Box,
  HStack,
  Flex,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import { mdiInformation } from "@mdi/js";
import Icon from "@mdi/react";
import { phaseOfMoonData } from "../../Config/phaseOfMoon";

interface RaportItem {
  label: string;
  number?: number | string;
  maxNumber?: number | string;
  tooltipContent: string;
  dataText?: Array<string>;
  variantItem: 1 | 2 | 3;
  phaseOnMoon?: number | string
}

const TextValue = ({ dataText }: any) => {
  const content = dataText.join(" | ");

  return <Text fontSize="15px">{content}</Text>;
};

const DefaultValue = ({ number, maxNumber }: any) => {
  return (
    <HStack alignItems="center" spacing="5px" lineHeight="38px">
      <Text fontSize="38px" fontWeight="700">
        {number}
      </Text>
      <Text fontSize="22px" opacity="0.6" fontWeight="500">
        /{maxNumber}
      </Text>
    </HStack>
  );
};

const MoonValue = ({ phaseOnMoon }: any) => {
  const icon = phaseOfMoonData[phaseOnMoon - 1].icon;
  const name = phaseOfMoonData[phaseOnMoon - 1].name;

  return (
    <HStack>
      <Text fontSize="15px">{name}</Text>
      <Icon path={icon} size={"45px"} />
    </HStack>
  );
};

const RaportItem = ({
  label,
  number,
  maxNumber,
  tooltipContent,
  dataText,
  variantItem,
  phaseOnMoon,
}: RaportItem) => {
  let renderValue: any = null;
  switch (variantItem) {
    case 1:
      renderValue = <DefaultValue number={number} maxNumber={maxNumber} />;
      break;
    case 2:
      renderValue = <TextValue dataText={dataText} />;
      break;
    case 3:
      renderValue = <MoonValue phaseOnMoon={phaseOnMoon} />;
      break;
    default:
      break;
  }

  const variant = useBreakpointValue({
    base: "none",
    md: "block",
  });

  return (
    <HStack
      color="textLight"
      backgroundColor="itemList"
      py="10px"
      px="20px"
      borderRadius={6}
      _hover={{
        backgroundColor: "itemListHover",
      }}
      transition=".35s"
      fontSize="18px"
      minH="70px"
    >
      <HStack justifyContent="space-between" w="100%">
        <Flex>{label}</Flex>
        {renderValue}
      </HStack>
      <Box ps="40px" display={variant}>
        <Tooltip label={tooltipContent}>
          <Icon path={mdiInformation} size={"20px"} />
        </Tooltip>
      </Box>
    </HStack>
  );
};
export default RaportItem;
