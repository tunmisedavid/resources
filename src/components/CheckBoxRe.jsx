import { Checkbox } from "@chakra-ui/react";

const CheckBoxRe = ({label}) => {
  return (
    <>
      <Checkbox.Root variant={"solid"}>
        <Checkbox.HiddenInput />
        <Checkbox.Control  _checked={{ bg: "#3F3F3F" }} />
        <Checkbox.Label
          fontSize={{ babe: "14px", lg: "16px" }}
          paddingLeft={{ lg: 2}}
          fontWeight={"normal"}
          color={"#3F3F3F"}
          fontFamily={"Inter"}
        >
          {label}
        </Checkbox.Label>
      </Checkbox.Root>
    </>
  );
}

export default CheckBoxRe;
