import { Checkbox } from "@chakra-ui/react";
import { useDarkMode } from "./DarkModeContext";

const CheckBoxRe = ({label}) => {
    const {isDark} = useDarkMode();
  return (
    <>
      <Checkbox.Root variant={"solid"}>
        <Checkbox.HiddenInput />
        <Checkbox.Control  _checked={{ bg: "#3F3F3F" }} />
        <Checkbox.Label
          fontSize={{ babe: "14px", lg: "16px" }}
          paddingLeft={{ lg: 2}}
          fontWeight={"normal"}
          color={isDark ? "white" : "#3F3F3F"}
          fontFamily={"Inter"}
        >
          {label}
        </Checkbox.Label>
      </Checkbox.Root>
    </>
  );
}

export default CheckBoxRe;
