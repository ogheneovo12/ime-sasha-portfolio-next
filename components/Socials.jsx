import { Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTelegramPlane,
    FaTwitter
} from "react-icons/fa";

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
    {
      link: "#",
      icon: <FaTwitter />,
    },
    {
      link: "#",
      icon: <FaTelegramPlane />,
    },
  ];

function Socials({ containerProps, iconProps }) {
  return (
    <Flex
      flexWrap={["wrap", "nowrap"]}
      justifyContent={{ base: "center", md: "flex-end" }}
      {...containerProps}
    >
      {socials?.map(({ icon, link }, i) => (
        <IconButton
          key={`icons_${i}`}
          as="a"
          href={link}
          mx="10px"
          background="rgba(119, 206, 255, 0.291695)"
          color="#fff"
          w="23.45px"
          h="23.45px"
          icon={icon}
          _hover={{ background: "primary", color:"secondary" }}
          {...iconProps}
        />
      ))}
    </Flex>
  );
}

Socials.propTypes = {};

export default Socials;
