import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { Flex, Box, Text, Switch, Image, Link } from "@chakra-ui/react";
import { motion } from "motion/react";

import { IoIosMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

import { useDarkMode } from "./DarkModeContext";

import Logo from "../assets/Asset 2 1.svg";
import Dropdown from "../assets/icon_arrow.svg";

const MotionBox = motion.create(Box);

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const {isDark, toggleTheme}  = useDarkMode();

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.overflow = "auto");
  }, [openNav]);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const pages = [
    { page: "Dashboard", path: "/dashboard" },
    { page: "Resources", path: "/landing" },
    { page: "Toolkit", path: "/toolkit" },
  ];

  const location = useLocation();

  return (
    <Box
      as="section"
      fontFamily="Poppins"
      height="60px"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      position={"fixed"}
      left={0}
      top={0}
      right={0}
      backgroundColor={isDark ? "black" : "white"}
      zIndex={30}
      display="flex"
      alignItems="centre"
    >
      <Flex
        width={"90%"}
        maxWidth={"1280px"}
        m="auto"
        display="flex"
        alignItems="items-center"
        justifyContent="space-between"
      >
        <Flex alignItems="Center" gap={10}>
          <Flex gap={2} alignItems="center">
            <Image
              src={Logo}
              alt="Logo"
              height={{ base: "28px", lg: "30px" }}
              width={{ base: "28px", lg: "30px" }}
            />
            <Text
              color={isDark ? "white" : "#404040"}
              fontFamily="Inter"
              fontWeight="extrabold"
              fontSize={{ base: "18px", md: "23px" }}
            >
              LOGO
            </Text>
          </Flex>
          <Flex gap={8} display={{ base: "none", lg: "flex" }}>
            {pages.map((page) => (
              <Box key={page.page} position="relative">
                <Link
                  as={NavLink}
                  to={page.path}
                  outline={"none"}
                  _focusVisible={{ boxShadow: "none" }}
                  style={({ isActive }) => ({
                    paddingLeft: 14,
                    paddingRight: 14,
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                    color: !isActive ? "#2C3237" : "#314EF9",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  })}
                >
                  {page.page}
                </Link>
                {location.pathname === page.path && (
                  <MotionBox
                    layoutId="underline"
                    position="absolute"
                    bottom="-19px"
                    left="0"
                    right="0"
                    height="3px"
                    bg="#314EF9"
                    borderRadius="full"
                  />
                )}
              </Box>
            ))}
          </Flex>
        </Flex>
        <Flex gap={{ base: "10px", lg: "15px" }} alignItems="center">
          <Switch.Root>
            <Switch.HiddenInput />
            <Switch.Control
              onClick={toggleTheme}
              bg="#314EF9"
              _checked={{ bg: "black" }}
            />
            <Switch.Label
              fontFamily="Poppins"
              fontWeight="semibold"
              fontSize="14px"
              display={{ base: "none", lg: "block" }}
              color={isDark ? "#2C3237" : "black"}
            >
              Switch to Employee
            </Switch.Label>
          </Switch.Root>
          <Box borderLeftWidth="2px" borderColor="#E4E4E4" height="24px" />
          <Flex gap={2}>
            <Box
              fontFamily="Poppins"
              fontWeight="extrabold"
              fontSize="12px"
              backgroundColor="#17E4A1"
              height="33px"
              width="33px"
              borderRadius={100}
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
            >
              JA
            </Box>
            <Box
              alignItems="center"
              gap={1}
              fontFamily="Poppins"
              color="#525252"
              fontSize="16px"
              fontWeight="semibold"
              display={{ base: "none", lg: "flex" }}
            >
              Jonathan
              <Box as="span" cursor={"pointer"}>
                <Image src={Dropdown} />
              </Box>
            </Box>
          </Flex>
          <Flex display={{ lg: "none" }} cursor="pointer" onClick={handleNav}>
            <Box
              zIndex={30}
              position={"relative"}
              fontSize={30}
              color="#3C3C3C"
            >
              {!openNav ? <IoIosMenu /> : <MdOutlineClose />}
            </Box>
          </Flex>
        </Flex>
        <Box
          onClick={handleNav}
          height={200}
          paddingTop={10}
          transition="transform ease-in-out 0.3s"
          pos="fixed"
          left={0}
          right={0}
          top={0}
          backgroundColor="white"
          shadow={"sm"}
          flexDirection={"column"}
          display={{ base: "flex", lg: "none" }}
          transform={openNav ? "translateY(0)" : "translateY(-200px)"}
        >
          {pages.map((page) => (
            <Link
              as={NavLink}
              padding={"10px"}
              color={"#2C3237"}
              fontFamily={"Poppins"}
              fontSize={{ base: "14px", md: "16px" }}
              transition="background-color ease-in-out 0.1s"
              _hover={{ bg: "#314EF9", color: "white", textDecoration: "none" }}
              key={page.page}
              to={page.path}
            >
              {page.page}
            </Link>
          ))}
        </Box>
        {openNav && (
          <Box
            onClick={handleNav}
            position={"fixed"}
            left={0}
            right={0}
            top={200}
            height={"100%"}
            backgroundColor={"transparent"}
            zIndex={40}
          ></Box>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
