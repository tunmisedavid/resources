import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { CheckBoxRe } from ".";
import { useDarkMode } from "./DarkModeContext";

const SideCheckbox = () => {
  const { isDark } = useDarkMode();

  return (
    <Flex flexDir={"column"} gapY={8}>
      <Box>
        <Text
          marginBottom={"4"}
          color={isDark ? "white" : "#3F3F3F"}
          fontSize={{ base: "14px", lg: "16px" }}
          fontWeight={"bold"}
          fontFamily={"Inter"}
        >
          Key Foundational Principles
        </Text>
        <VStack align={"start"} gap={4}>
          <CheckBoxRe label="Secure Base" />
          <CheckBoxRe label="Sense of Appreciation" />
          <CheckBoxRe label="Learning Organisation" />
          <CheckBoxRe label="Mission and Vision" />
          <CheckBoxRe label="Wellbeing" />
        </VStack>
      </Box>
      <Box>
        <Text
          marginBottom={"4"}
          color={isDark ? "white" : "#3F3F3F"}
          fontSize={{ base: "14px", lg: "16px" }}
          fontWeight={"bold"}
          fontFamily={"Inter"}
        >
          Document Type
        </Text>
        <VStack align="start" gap={4}>
          <CheckBoxRe label="DOC" />
          <CheckBoxRe label="Link" />
          <CheckBoxRe label="PDF" />
          <CheckBoxRe label="Video" />
        </VStack>
      </Box>
      <Box>
        <Text
          marginBottom={"4"}
          color={isDark ? "white" : "#3F3F3F"}
          fontSize={{ base: "14px", lg: "16px" }}
          fontWeight={"bold"}
          fontFamily={"Inter"}
        >
          Categories
        </Text>
        <VStack align="start" gap={4}>
          <CheckBoxRe label="Sample" />
          <CheckBoxRe label="Sample" />
          <CheckBoxRe label="Sample" />
          <CheckBoxRe label="Sample" />
          <CheckBoxRe label="Sample" />
        </VStack>
      </Box>
    </Flex>
  );
};

export default SideCheckbox;
