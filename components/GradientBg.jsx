import { Box, Container } from "@chakra-ui/react";
import React from "react";


const GradientBg = ({ children, ...rest }) => (
  <Box
    position={"relative"}
    width={"100%"}
    minH={"100vh"}
    px={{ base: "15px", md: "94px" }}
    py={"10px" }
    {...rest}
    bgGradient={`linear(145deg, bgprimary 40%, bgdark 0%)`}
    bgPos={"center center, left bottom, right bottom"}
    overflowX="hidden"
    zIndex={0}
  >
    <Box
      left={0}
      width={"37.43px"}
      height="178.15px"
      transform={"matrix(-0.71, 0.71, 0.71, 0.71, 0, 0)"}
      bottom={"200px"}
      borderRadius={"157.5px"}
      background={"rgba(255, 255, 255, 0.05)"}
      position={"absolute"}
      zIndex="0"
    />
    <Box
      left={0}
      width={"37.43px"}
      height="178.15px"
      transform={"matrix(-0.71, 0.71, 0.71, 0.71, 0, 0)"}
      bottom={"130px"}
      borderRadius={"157.5px"}
      background={"rgba(255, 255, 255, 0.05)"}
      position={"absolute"}
      zIndex="0"
    />

    <Box
      right={0}
      width={"37.43px"}
      height="178.15px"
      transform={"rotate(45deg)"}
      bottom={"200px"}
      borderRadius={"157.5px"}
      background={"rgba(255, 255, 255, 0.05)"}
      position={"absolute"}
      zIndex="0"
    />
    <Box
      right={0}
      width={"37.43px"}
      height="178.15px"
      transform={"rotate(45deg)"}
      bottom={"130px"}
      borderRadius={"157.5px"}
      background={"rgba(255, 255, 255, 0.05)"}
      position={"absolute"}
      zIndex="0"
    />

    {children}
  </Box>
);

export const GradientBgContainer = ({ children, ...rest }) => (
  <Container
    position={"relative"}
    boxShadow={"0px 4px 100px rgba(0, 0, 0, 0.5)"}
    borderRadius={"20px"}
    minH={"400px"}
    bgColor="secondary"
    {...rest}
    maxW={"container.xl"}
    bgImage={`url(/img/dots.png)`}
    bgPos={"right 20%"}
    backgroundRepeat="no-repeat"
    _after={{
      content: '""',
      h: "132px",
      w: "132px",
      borderRadius: "100%",
      bg: "#FEE250",
      pos: "absolute",
      top: "40%",
      right: "-40px",
      zIndex:"-1",
      boxShadow:"0px 2px 50px rgba(119, 206, 255, 0.5)"
    }}
  >
    {children}
  </Container>
);

GradientBg.propTypes = {};

export default GradientBg;
