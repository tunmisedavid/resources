import { Button, Card, Image } from '@chakra-ui/react';
import { useDarkMode } from './DarkModeContext';

const GridcardsInner = ({image, title, info, filterCheck}) => {
      const {isDark} = useDarkMode();
  
  return (
    <>
      <Card.Root
        bg={isDark ? "black" : "white"}
        shadowColor={"#F2F2F2"}
        rounded={20}
        height={290}
      >
        <Card.Body>
          <Image
            backgroundColor={isDark ? "white" : "transparent"}
            src={image}
            width={33}
            zIndex={20}
            marginTop={"25px"}
          />
          <Card.Title
            marginTop={"40px"}
            fontFamily={"Poppins"}
            fontWeight={"bold"}
            fontSize={{ base: "22px", lg: "18px" }}
            color={isDark ? "white" : "#2C3237"}
          >
            {title}
          </Card.Title>
          <Card.Description
            marginTop={4}
            fontFamily={"Poppins"}
            fontWeight={"normal"}
            color={isDark ? "white" : "#828282"}
          >
            {info}
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button
            fontWeight={"medium"}
            fontSize={{ base: "17px", lg: "12px" }}
            height={8}
            color={"#222222"}
            backgroundColor={"#F2F2F2"}
            rounded={20}
          >
            {filterCheck}
          </Button>
        </Card.Footer>
      </Card.Root>
    </>
  );
}

export default GridcardsInner
