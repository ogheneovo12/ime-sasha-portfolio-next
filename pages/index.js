import { Box, Button, Flex } from "@chakra-ui/react";
import GradientBg, { GradientBgContainer } from "components/GradientBg";
import PageLanguage from "components/PageLanguage";
import React from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DefaultMeta from "components/DefaultMeta";
import Stepper, { steps } from "components/sections/Stepper";




function PortFolio(props) {
  const { asPath  } = useRouter();
  const [SW, setSW] = React.useState(null);


  const handleStepChange = (state) => {
    const newUrl = `#${steps[state?.activeIndex || 0].key}`;
    if (window && newUrl !== asPath) {
      window.history.replaceState(
        { ...window.history.state, as: newUrl, url: newUrl },
        "",
        newUrl
      );
    }
  };

  React.useEffect(() => {
    window && window?.scrollTo(0, 0);
    if (SW) {
      
      SW?.slideTo(
        (steps.findIndex((s) => asPath.includes(s?.key)) + 1 || 1) - 1,
        100
      );
    }
  }, [asPath, SW]);

  const isLastStep = SW?.currentStep === SW?.totalSteps;

  return (
    <GradientBg
      display={"flex"}
      flexFlow="column"
      alignItems="center"
      pb={{ base: "100px", md: "15px" }}
    >
      <DefaultMeta />
      <PageLanguage />
      <GradientBgContainer
        padding={{ base: isLastStep ? "10px" : "20px", fld: "20px" }}
        display="flex"
        flexFlow="column"
       
        alignContent="flex-start"
      >
        <Box maxH={"100%"} overflow={"hidden"}>
          <Stepper
            setSW={setSW}
            setWzState={handleStepChange}
            initialStep={0}
          />
        </Box>
      
      </GradientBgContainer>
    </GradientBg>
  );
}



export async function getStaticProps({ locale, params }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["translations"])),
    },
  };
}

PortFolio.propTypes = {};

export default PortFolio;
