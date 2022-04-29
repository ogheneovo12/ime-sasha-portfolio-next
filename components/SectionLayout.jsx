import { Box } from "@chakra-ui/react";
import React from "react";
import JoinCompamy from "./JoinCompamy";
import Title from "./Title";

function SectionLayout({ children, role, companyName, companyType }) {
 

  return (
    <Box
      pt="20px"
      justifyContent={"space-between"}
      minH={"300px"}
      flexFlow={"column"}
      display={"flex"}
      px={{ base: "0px", md: "20px" }}
    >
      <Box
        position={"relative"}
        py="30px"
        px="30px"
        minH={"130px"}
        width={"fit-content"}
        transition="all .5s ease-in"
        _before={{
          content: `""`,
          position: "absolute",
          bottom: "0",
          right: 0,
          height: "36px",
          width: "36px",
          borderBottomRightRadius: "20px",
          borderRight: "1px solid #FEE250",
          borderBottom: "1px solid #FEE250",
        }}
        _after={{
          content: `""`,
          position: "absolute",
          top: "0",
          left: 0,
          height: "36px",
          width: "36px",
          borderTopLeftRadius: "20px",
          borderLeft: "1px solid #FEE250",
          borderTop: "1px solid #FEE250",
        }}
      >
        <Title
          role={role}
          companyName={companyName}
          companyType={companyType}
        />
        {children}
      </Box>

      <JoinCompamy />
    </Box>
  );
}

SectionLayout.propTypes = {};

export default SectionLayout;
