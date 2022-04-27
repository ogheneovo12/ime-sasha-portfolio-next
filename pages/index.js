import { Box, Button, Flex } from "@chakra-ui/react";
import GradientBg, { GradientBgContainer } from "components/GradientBg";
import PageLanguage from "components/PageLanguage";
import React from "react";
import StepWizard from "react-step-wizard";
import Contacts from "components/sections/Contacts";
import CTO from "components/sections/CTO";
import Founder from "components/sections/Founder";
import Manager from "components/sections/Manager";
import Welcome from "components/sections/Welcome";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DefaultMeta from "components/DefaultMeta";

const steps = [
  {
    key: "welcome",
    step: Welcome,
  },
  {
    key: "manager",
    step: Manager,
  },
  {
    key: "founder",
    step: Founder,
  },
  {
    key: "cto",
    step: CTO,
  },
  {
    key: "contacts",
    step: Contacts,
  },
];

const active_hover_focus = {
  boxShadow: { base: " 0px 0px  1px 7px rgba(0,0,0,0.6)", md: "none" },
  background: { base: "#2F3143", md: "transparent" },
  h: { base: "56px", md: "auto" },
};

const activeBtn = {
  color: "#fff",
  fontSize: "24px",
  lineHeight: "28px",
  h: active_hover_focus.h,
  w: active_hover_focus.h,
  borderRadius: { base: "37.3333px", md: "0" },
  boxShadow: active_hover_focus.boxShadow,
  _focus: active_hover_focus,
  _hover: active_hover_focus,
  position: { base: "relative", md: "static" },
  mt: { base: "-25px", md: "0px" },
  background: active_hover_focus.background,
  flexShrink: 0,
};

const defaultBtn = {
  fontSize: "14px",
  lineHeight: "16px",
  color: "rgba(255, 255, 255, 0.2)",
  background: "transparent",
  _focus: { boxShadow: "none" },
};

function PortFolio(props) {
  const { asPath } = useRouter();
  const [SW, setSW] = React.useState({});
  const [wzstate, setWzState] = React.useState({
    previousStep: 1,
    // if it -1(not found), -1 + 1 == 0 falls back to 1, if it's > 1 (found), step is index +1
    activeStep: steps.findIndex((s) => asPath?.includes(s.key)) + 1 || 1,
  });

  React.useEffect(() => {
    window && window?.scrollTo(0, 0);
  }, [asPath?.hash]);

  const isLastStep = SW?.currentStep === SW.totalSteps;

  return (
    <GradientBg
      display={"flex"}
      flexFlow="column"
      alignItems="center"
      justifyContent="center"
      pb={{ base: "100px", md: "15px" }}
    >
      <DefaultMeta />
      <PageLanguage />
      <GradientBgContainer
        padding={{ base: isLastStep ? "10px" : "20px", fld: "30px" }}
        display="flex"
        flexFlow="column"
      >
        <Box overflow={"hidden"}>
          <StepWizard
            onStepChange={setWzState}
            instance={setSW}
            isHashEnabled={true}
          >
            {steps?.map(({ key, step: Component }) => (
              <Component key={key} hashKey={key} />
            ))}
          </StepWizard>
        </Box>
        <Flex
          py={{ base: "20px", fld: "0px" }}
          mt="auto"
          justifyContent={{ base: "center", md: "flex-end" }}
          position={{ base: "fixed", md: "static" }}
          left="0"
          right={"0"}
          bottom={0}
          bg={{ base: "#242635", md: "transparent" }}
          borderTopRadius={{ base: "25.8788px", md: "0px" }}
          boxShadow={{
            md: "none",
            base: "0px -8.48485px 22.0606px rgba(0, 0, 0, 0.3)",
          }}
          zIndex={9999}
          px={{ base: "26px", md: "0px" }}
          h={{ base: "73px", md: "auto" }}
        >
          {steps?.map((_, i) => (
            <Button
              {...(wzstate?.activeStep === i + 1 ? activeBtn : defaultBtn)}
              key={_.key}
              mx={{ base: "10px", md: "33px" }}
              onClick={() => SW?.goToStep(i + 1)}
              transition="all ease-in .3s"
            >
              0 {i + 1}
            </Button>
          ))}
        </Flex>
      </GradientBgContainer>
    </GradientBg>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["translations", "meta"])),
      // Will be passed to the page component as props
    },
  };
}

PortFolio.propTypes = {};

export default PortFolio;
