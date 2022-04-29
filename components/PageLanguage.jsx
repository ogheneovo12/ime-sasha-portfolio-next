import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FLAG_API, SUPPORTED_LANGUAGE } from "app_constants";
import { useRouter } from "next/router";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

function PageLanguage(props) {
  const router = useRouter();
  const { locale } = router;

  const retrieveCacheLang = () => {
    const lang = locale || "en";
    return SUPPORTED_LANGUAGE?.hasOwnProperty(lang) ? lang : "en";
  };

  const pickedLang = SUPPORTED_LANGUAGE[retrieveCacheLang()];

  const handleOnClick = (nextLocale) => {
    // change just the locale and maintain all other route information including href's query
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  return (
    <Flex
      mb="10px"
      alignItems={"center"}
      width="100%"
      justifyContent={"flex-end"}
    >
      <Text
        mr="20px"
        fontSize="14px"
        lineHeight="16px"
        color="rgba(255, 255, 255, 0.4)"
      >
        Change Language
      </Text>
      <Menu>
        <MenuButton as={Flex}>
          <Button
            fontSize={"12px"}
            color="#fff"
            background="transparent"
            rightIcon={<BsChevronDown />}
          >
            <Image
              mr="10px"
              w="24px"
              h="17.14px"
              src={`${FLAG_API}${pickedLang?.code}`}
            />
            {pickedLang?.label}
          </Button>
        </MenuButton>
        <MenuList bg="#fff" zIndex={"9999"}>
          {Object.keys(SUPPORTED_LANGUAGE).map((key) => {
            const lang = SUPPORTED_LANGUAGE[key];
            return (
              <MenuItem
                onClick={() => handleOnClick(key)}
                color="secondary"
                key={lang.code}
                bg={key === locale ? "primary" : "#fff"}
              >
                <Image
                  mr="10px"
                  w="24px"
                  h="17.14px"
                  src={`${FLAG_API}${lang.code}`}
                />{" "}
                {lang?.label}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Flex>
  );
}

PageLanguage.propTypes = {};

export default PageLanguage;
