import { Box, Button, Divider, Flex, IconButton, Text } from "@chakra-ui/react";
import Ukr from "components/Ukr";
import React from "react";
import { useTranslation } from "next-i18next";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

function Contacts(props) {
  const { t } = useTranslation("translations");

  const socials = [
    {
      icon: <FaFacebook />,
      name: "facebook",
      bg: "#1877F2",
    },
    {
      icon: <FaTwitter />,
      bg: "#1DA1F2",
      name: "twitter",
    },
    {
      icon: <FaTelegramPlane />,
      name: "telegram",
      bg: "#0088CC",
    },
    {
      icon: <FaLinkedinIn />,
      name: "linkedin",
      bg: "#2867B2",
    },
    {
      icon: <FaInstagram />,
      name: "instagram",
      bg: "#F00073",
    },
    {
      icon: <Ukr />,
      name: "ukr",
      bg: "#0077FF",
    },
  ];

  return (
    <Box mt={{ base: "30px", fld: "0px" }}>
      <Text
        fontSize={{ base: "26px", md: "38px" }}
        textAlign={"center"}
        as="h1"
      >
        {t("socials.main")}
      </Text>
      <Text
        mx="auto"
        maxW="592px"
        textAlign={"center"}
        lineHeight={"17.91px"}
        fontSize={"15.27px"}
      >
        {t("socials.sub")}
      </Text>
      <Flex mt="10px" flexWrap={"wrap"} justifyContent="space-evenly">
        {socials?.map((item, i) => (
          <SocialBox
            key={`${item?.text}${i}`}
            {...item}
            text={t(`socials.${item.name}`)}
            link={t(`socials_url.${item.name}`)}
            btnText={t("join")}
          />
        ))}
      </Flex>
      <Divider opacity={"0.06"} />
    </Box>
  );
}

const SocialBox = ({ text, icon, link, bg, btnText }) => (
  <Flex
    flexFlow={"column"}
    alignItems="center"
    textAlign={"center"}
    maxW={{ base: "35%", fld: "254px" }}
    mx={{ base: "13px", md: "20px", fld: "40px" }}
    my="10px"
  >
    <IconButton
      fontSize={"20px"}
      width={"40px"}
      height={"40px"}
      color="#fffS"
      as="a"
      href={link}
      background={bg}
      icon={icon}
    />
    <Text lineHeight={"14px"} fontSize={"12px"} my="22px">
      {text}
    </Text>
    <Button minWidth="84.85px" h="28px" variant={"ghost"}>
      {btnText}
    </Button>
  </Flex>
);

Contacts.propTypes = {};

export default Contacts;
