import { Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from 'next-i18next';
import SectionLayout from "components/SectionLayout";

function CTO(props) {
  const { t } = useTranslation("translations");
  return (
    <SectionLayout
      role="Chief Technical Officer"
      companyName={"WAVES TECH"}
      companyType={"SOFTWARE COMPANY"}
    >
      <Text my="22px">{t("ctoInfo.p1")}</Text>
      <Text my="22px">{t("ctoInfo.p2")}</Text>
    </SectionLayout>
  );
}

CTO.propTypes = {};

export default CTO;
