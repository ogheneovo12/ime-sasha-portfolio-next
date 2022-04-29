import React from "react";
import SectionLayout from "components/SectionLayout";
import { useTranslation } from "next-i18next";
import { Text } from "@chakra-ui/react";

function Founder(props) {
  const { t } = useTranslation("translations");
  return (
    <SectionLayout
      role={t("myprojectInfo.title")}
      companyName={t("myprojectInfo.subtitle.name")}
      companyType={t("myprojectInfo.subtitle.desc")}
    >
      <Text my="22px">{t("myprojectInfo.p1")}</Text>
    </SectionLayout>
  );
}

Founder.propTypes = {};

export default Founder;
