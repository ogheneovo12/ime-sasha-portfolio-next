import { Flex, IconButton } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  {
    name: "facebook",
    icon: <FaFacebookF />,
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
  },
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
  },
  {
    name: "twitter",
    icon: <FaTwitter />,
  },
  {
    name: "telegram",
    icon: <FaTelegramPlane />,
  },
];

function Socials({ containerProps, iconProps }) {
  const { t } = useTranslation("translations");
  return (
    <Flex
      flexWrap={["wrap", "nowrap"]}
      justifyContent={{ base: "center", md: "flex-end" }}
      {...containerProps}
    >
      {socials?.map(({ icon, name }, i) => (
        <IconButton
          key={`icons_${i}`}
          as="a"
          href={t(`socials_url.${name}`)}
          mx="10px"
          background="rgba(119, 206, 255, 0.291695)"
          color="#fff"
          w="23.45px"
          h="23.45px"
          icon={icon}
          _hover={{ background: "primary", color: "secondary" }}
          {...iconProps}
        />
      ))}
    </Flex>
  );
}

Socials.propTypes = {};

export default Socials;
