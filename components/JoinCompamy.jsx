import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    link: "#",
    icon: <FaFacebookF />,
  },
  {
    link: "#",
    icon: <FaInstagram />,
  },
  {
    link: "#",
    icon: <FaLinkedinIn />,
  },
];

function JoinCompamy(props) {
  const { t } = useTranslation();
  return (
    <Box px="20px" mt="120px">
      <Text lineHeight={"21.11px"} fontWeight={"bold"} fontSize={"18px"}>
        {t("joinWaves")}
      </Text>
      <Flex my={{base:"15px", md:"22px"}}>
        {socials?.map(({ icon, link }, i) => (
          <IconButton
            key={`icons_${i}`}
            as="a"
            href={link}
            mr="10px"
            background="rgba(119, 206, 255, 0.291695)"
            color="#fff"
            w="23.45px"
            h="23.45px"
            icon={icon}
          />
        ))}
      </Flex>
    </Box>
  );
}

JoinCompamy.propTypes = {};

export default JoinCompamy;
