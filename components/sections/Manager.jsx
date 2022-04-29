import { Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-i18next";
import SectionLayout from "components/SectionLayout";

//   role="Managing Partner"
//   companyName={"WAVES CAMP"}
//   companyType={" INCUBATOR"}
function Manager(props) {
  const { t } = useTranslation("translations");
  return (
    <SectionLayout
      role={t("managerInfo.title")}
      companyName={t("managerInfo.subtitle.name")}
      companyType={t("managerInfo.subtitle.desc")}
    >
      <Text color="#FFFFFF" my="12px">
        {t("managerInfo.p1")}
      </Text>
    </SectionLayout>
  );
}

Manager.propTypes = {};

export default Manager;
