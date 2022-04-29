import React from "react";
import StepWizard from "react-step-wizard";
import Contacts from "components/sections/Contacts";
import CTO from "components/sections/CTO";
import Founder from "components/sections/Founder";
import Manager from "components/sections/Manager";
import Welcome from "components/sections/Welcome";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Button, Flex } from "@chakra-ui/react";

export const steps = [
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
  color:{base:"secondary",md:"#fff"},
  lineHeight: "28px",
  position: { base: "relative", md: "static" },
  background: { base:"#fff", md:"transparent"},
  flexShrink: 0,
  fontSize:{ base:"14px", md:"24px"},
  _hover: { background:{ md:"transparent"},   boxShadow: "none"},
  _focus: { boxShadow: "none" },
 
};

const defaultBtn = {
  fontSize: "14px",
  lineHeight: "16px",
  color: "rgba(255, 255, 255, 0.2)",
  background: "transparent",
  _focus: { boxShadow: "none",  },
  _hover: { background: "transparent", color:"#fff", boxShadow: "none"},
};

function Stepper({ setWzState, setSW }) {
  return (
    <Swiper onSlideChange={setWzState} spaceBetween={50} slidesPerView={1} onSwiper={setSW}>
      {steps?.map(({ key, step: Component }) => (
        <SwiperSlide key={key}>
          <Component stepName={key} />
        </SwiperSlide>
      ))}
      <StepperNav />
    </Swiper>
  );
}

function StepperNav() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onSlideChange = (sw) => setActiveIndex(sw.activeIndex);
  let swiper = useSwiper();
  swiper.on("activeIndexChange", onSlideChange);


  return (
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
      slot="container-end"
    >
      {steps?.map((_, i) => (
        <Button
          {...(activeIndex === i ? activeBtn : defaultBtn)}
          key={_.key}
          mx={{ base: "10px", md: "33px" }}
          onClick={() => swiper?.slideTo(i, 1000)}
          transition="all ease-in .3s"
          px={{ base:0, md:"10px"}}
        >
          0 {i + 1}
        </Button>
      ))}
    </Flex>
  );
}
Stepper.propTypes = {};

export default Stepper;
