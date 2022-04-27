import { Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from 'next-i18next';
import SectionLayout from "components/SectionLayout";

//   role="Managing Partner"
//   companyName={"WAVES CAMP"}
//   companyType={" INCUBATOR"}
function Manager(props) {
  const { t } = useTranslation("translations");
  return (
    <SectionLayout
      role="Managing Partner"
      companyName={"WAVES CAMP"}
      companyType={" INCUBATOR"}
    >
      <Text color="#FFFFFF" my="22px">
        {t("managerInfo")}
      </Text>
    </SectionLayout>
  );
}

Manager.propTypes = {};

export default Manager;
