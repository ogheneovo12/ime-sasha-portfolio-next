import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Title({ role, companyName, companyType }) {
  return (
    <Box>
      <Text as="h1">{role}</Text>
      <Text as="h3">
        <Text color="#FEE250" as="span">
          {companyName},
        </Text>{" "}
        {companyType}
      </Text>
    </Box>
  );
}

Title.propTypes = {};

export default Title;
