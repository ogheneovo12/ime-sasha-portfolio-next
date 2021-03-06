import {
  Box,
  Button,
  Flex,
  Image,
  Text
} from "@chakra-ui/react";
import Socials from "components/Socials";
import { useTranslation } from 'next-i18next';
import React from "react";
import { useSwiper } from "swiper/react";


function Welcome(props) {
  const { t } = useTranslation("translations");
  const swiper = useSwiper();

  return (
    <Box overflow={"hidden"}>
      <Socials containerProps={{ display: { base: "none", fld: "flex" } }} />
      <Flex
        flexFlow={{ base: "column", fld: "row" }}
        mt={{ base: "0px", md: "20px" }}
      >
        <Box
          display={{ base: "none", fld: "block" }}
          minW={{ base: "100%", fld: "360px" }}
        >
          <Image
            mx={{ base: "auto", fld: "0" }}
            src={"/img/imesasha.png"}
            alt="Ime sitting on a chair"
          />
        </Box>
        <Box
          textAlign={{ base: "center", fld: "left" }}
          ml={{ base: "0px", fld: "20px" }}
        >
          <Text fontSize={["16px", "16px", "initial"]} mt="20px" as="h3">
            {t("greetings")} 👋
          </Text>
          <Text color="#fff" mt={{ base: "10px", fld: "20px" }} as="h1">
            {t("iam")}{" "}
            <Text as="span" color="primary">
              Sasha
            </Text>{" "}
            Borisov
          </Text>
          <Box
            display={{ base: "block", fld: "none" }}
            minW={{ base: "100%", fld: "360px" }}
            mt={"14px"}
          >
            <Image
               height={"200px"}
              mx={{ base: "auto", fld: "0" }}
              src={"/img/imesasha.png"}
              alt="Ime sasha sitting on a chair"
            />
          </Box>
          <Text
            textUnderlineOffset={"9px"}
            color="rgba(255, 255, 255, 0.5)"
            textDecoration={"underline"}
            mt={{base:"14px" , fld:"24px"}}
            as="h2"
          >
            <Text textTransform={"capitalize"} color="#fff" as="span">
              {t("welcome")}
            </Text>
          </Text>
          <Text mx={{ base: "auto", fld: "0" }} maxW="576px" my="24px">
            {t("summary")}
          </Text>
          <Flex
            flexFlow={{base:"column", "2sm":"row"}}
            justifyContent={["center", "center","center", "flex-start"]}
          >
            <Button
              border="1px solid"
              borderColor={"primary"}
              _hover={{
                background: "transparent",
                border: "0.837838px solid rgba(255, 255, 255, 0.5)",
                color: "#fff",
              }}
              onClick={() => swiper?.slideTo(1, 1000)}
            >
              {t("tour")}
            </Button>
            <Button
              my={{base:"10px",   "2sm": "0px"}}
              ml={{base:"0px",  "2sm": "15px"}}
              _hover={{ background: "primary", color: "secondary" }}
              variant={"ghost"}
              onClick={() => swiper?.slideTo(4, 1000)}
            >
              {t("intouch")}
            </Button>
          </Flex>
          <Socials
            iconProps={{ mx: "5px" }}
            containerProps={{
              mt: "35px",
              display: { base: "flex", fld: "none" },
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
}

Welcome.propTypes = {};

export default Welcome;
