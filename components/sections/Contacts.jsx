import { Box, Button, Divider, Flex, IconButton, Text } from "@chakra-ui/react";
import Ukr from "components/Ukr";
import React from "react";
import { useTranslation } from 'next-i18next';
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
      text: t("socials.facebook"),
      icon: <FaFacebook />,
      link: "/#",
      bg: "#1877F2",
    },
    {
      text: t("socials.twitter"),
      icon: <FaTwitter />,
      link: "#",
      bg: "#1DA1F2",
    },
    {
      text: t("socials.telegram"),
      icon: <FaTelegramPlane />,
      link: "#",
      bg: "#0088CC",
    },
    {
      text: t("socials.linkedIn"),
      icon: <FaLinkedinIn />,
      link: "#",
      bg: "#2867B2",
    },
    {
      text: t("socials.instagram"),
      icon: <FaInstagram />,
      link: "#",
      bg: "#F00073",
    },
    {
      text: t("socials.ukr"),
      icon: <Ukr />,
      link: "#",
      bg: "#0077FF",
    },
  ];

  return (
    <Box mt={{ base: "30px", fld: "0px" }}>
      <Text fontSize={{base:"26px", md:"38px"}} textAlign={"center"} as="h1">
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
      <Flex mt="20px" flexWrap={"wrap"} justifyContent="space-evenly">
        {socials?.map((item, i) => (
          <SocialBox key={`${item?.text}${i}`} {...item} t={t} />
        ))}
      </Flex>
      <Divider opacity={"0.06"} />
    </Box>
  );
}

const SocialBox = ({ text, icon, link, bg, t }) => (
  <Flex
    flexFlow={"column"}
    alignItems="center"
    textAlign={"center"}
    maxW={{base:"35%", fld:"254px"}}
    mx={{base:"13px", md:"20px", fld:"40px"}}
    my="22px"
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
    <Button width="84.85px" h="28px" variant={"ghost"}>
      {t("join")}
    </Button>
  </Flex>
);

Contacts.propTypes = {};

export default Contacts;
