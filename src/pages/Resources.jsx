import {
  Box,
  Flex,
  Grid,
  Input,
  InputGroup,
  Text,
  Image,
} from "@chakra-ui/react";

import { LuSearch } from "react-icons/lu";
import { IoFilterSharp } from "react-icons/io5";

import { GridcardsInner, SideCheckbox } from "../components";

import CardImage1 from "../assets/card-1.svg";
import CardImage2 from "../assets/card-2.svg";
import CardImage3 from "../assets/card-3.svg";

import Bg1 from "../assets/Vector-1.svg";
import Bg2 from "../assets/Vector-2.svg";
import Bg3 from "../assets/Vector-3.svg";
import Bg4 from "../assets/Vector-4.svg";
import Bg5 from "../assets/Vector-5.svg";
import Bg6 from "../assets/Vector-6.svg";

const Resources = () => {
  return (
    <Box
      as={"section"}
      fontFamily={"Poppins"}
      marginBottom={{ base: "60px", lg: "100px" }}
    >
      <Box m={"auto"} marginTop={{ base: "10", lg: "20" }} maxWidth={"1250px"}>
        <Box margin={"auto"} maxWidth={"750px"}>
          <Text
            color={"#2C3237"}
            fontFamily={"Poppins"}
            fontWeight={"bold"}
            textAlign={"center"}
            fontSize={{ base: "40px", lg: "52px" }}
          >
            Resources
          </Text>
          <Text
            maxW={"640px"}
            margin={"auto"}
            width={{ base: "290px", lg: "100%" }}
            marginTop={{ lg: "3px" }}
            textAlign={"center"}
            color={"#2C3237"}
            fontFamily={"Inter"}
            fontWeight={"medium"}
            fontSize={{ base: "15px", lg: "18px" }}
          >
            Consectetur adipiscing elit duis tristique sollicitudin nibh sit
            amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
            vitae congue
          </Text>
          <InputGroup
            m={"auto"}
            display={"flex"}
            alignItems={"center"}
            width={"80%"}
            marginTop={{ base: "8", lg: "10" }}
            startElement={<LuSearch />}
          >
            <Input
              placeholder="Search by title or keywords"
              fontFamily={"Inter"}
              fontSize={{ base: "14px", lg: "16px" }}
              fontWeight={"normal"}
              color={"#4F4F4F"}
            />
          </InputGroup>
        </Box>
        <Box position={"relative"} marginTop={{ base: "70px", lg: "20px" }}>
          <Flex
            alignItems={"center "}
            justify={"center"}
            gap={4}
            backgroundColor={"#F2F2F2"}
            color={"#3F3F3F"}
            position={"absolute"}
            w={"100%"}
            left={0}
            right={0}
            height={10}
            display={{ base: "flex", lg: "none" }}
          >
            <IoFilterSharp style={{ fontSize: "25px", fontWeight: "bolder" }} />
            <Text fontWeight={"medium"} fontFamily={"Poppins"}>
              Show Filters
            </Text>
          </Flex>
        </Box>
        <Text
          display={{ base: "none", lg: "block" }}
          paddingLeft={5}
          m={"auto"}
          width={{ base: "85%", xl: "90%" }}
          marginTop={20}
          fontFamily={"Inter"}
          fontWeight={"bold"}
          color={"#3F3F3F"}
        >
          Filters
        </Text>
        <Box m={"auto"} width={{ base: "85%", xl: "90%" }}>
          <Flex
            justifyContent={"space-between"}
            flexDirection={{ base: "column", lg: "row" }}
            gap={10}
            marginTop={{ base: "120px", md: "110px", lg: "20px" }}
            position={"relative"}
          >
            <Box
              display={{ base: "none", lg: "block" }}
              width={368}
              padding={5}
              borderTopWidth={1}
              borderTopColor={"#E0E0E0"}
            >
              <SideCheckbox />
            </Box>

            <Box
              margin={"auto"}
              marginTop={{ base: "35px", md: "50px", lg: "0" }}
              width={{ base: "100%" }}
            >
              <Grid
                templateColumns={{ lg: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
                placeItems={{ base: "center" }}
                width={"100%"}
                gap={4}
              >
                <Box position={"relative"} w={"100%"} margin={"auto"}>
                  <GridcardsInner
                    image={CardImage1}
                    title="The ultimate guide to Workplace Chat"
                    info="Sample Topic"
                    filterCheck="Secure Base"
                  />
                  <Image
                    src={Bg1}
                    position={"absolute"}
                    right={0}
                    top={0}
                    borderTopRightRadius={20}
                  />
                </Box>
                <Box position={"relative"} w={"100%"} margin={"auto"}>
                  <GridcardsInner
                    image={CardImage1}
                    title="The ultimate guide to Workplace Chat"
                    info="Sample Topic"
                    filterCheck="Wellbeing"
                  />
                  <Image
                    src={Bg2}
                    position={"absolute"}
                    left={0}
                    top={0}
                    borderTopRightRadius={20}
                    borderTopLeftRadius={20}
                  />
                </Box>
                <Box position={"relative"} w={"100%"} margin={"auto"}>
                  <GridcardsInner
                    image={CardImage2}
                    title="The ultimate guide to Workplace Chat"
                    info="Sample Topic"
                    filterCheck="Sense of Appreciation"
                  />
                  <Image
                    src={Bg3}
                    position={"absolute"}
                    right={0}
                    top={0}
                    borderTopRightRadius={20}
                  />
                </Box>
                <Box position={"relative"} w={"100%"} margin={"auto"}>
                  <GridcardsInner
                    image={CardImage2}
                    title="The ultimate guide to Workplace Chat"
                    info="Sample Topic"
                    filterCheck="Secure Base"
                  />
                  <Image
                    src={Bg4}
                    position={"absolute"}
                    left={0}
                    top={0}
                    borderTopRightRadius={20}
                    borderTopLeftRadius={20}
                  />
                </Box>
                <Box position={"relative"} w={"100%"} margin={"auto"}>
                  <GridcardsInner
                    image={CardImage3}
                    title="The ultimate guide to Workplace Chat"
                    info="Sample Topic"
                    filterCheck="Learning Organisation"
                  />
                  <Image
                    src={Bg5}
                    position={"absolute"}
                    left={0}
                    top={0}
                    borderTopRightRadius={20}
                    borderTopLeftRadius={20}
                  />
                </Box>
                <Box position={"relative"} w={"100%"} margin={"auto"}>
                  <GridcardsInner
                    image={CardImage3}
                    title="The ultimate guide to Workplace Chat"
                    info="Sample Topic"
                    filterCheck="Mission and Vision"
                  />
                  <Image
                    src={Bg6}
                    position={"absolute"}
                    right={0}
                    top={0}
                    borderTopRightRadius={20}
                  />
                </Box>
              </Grid>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Resources;
