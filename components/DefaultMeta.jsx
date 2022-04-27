import React from "react";
import SEO from "./Seo";
import { useTranslation } from "next-i18next";

function DefaultMeta(props) {
  const { t } = useTranslation("meta");

  return (
    <SEO
      image="/img/imesasha.png"
      title={t("title")}
      description={t("description")}
      metas={[
        {
          property: "og:url",
          content: "WEBSITE DEPLOY URL GOES HERE",
        },
        {
          property: "og:type",
          content: t("type"),
        },
        {
          property: "og:title",
          content: t("title"),
        },
        {
          property: "og:description",
          content: t("description"),
        },
        {
          property: "og:image",
          content: "/img/imesasha.png",
        },
      ]}
    />
  );
}

DefaultMeta.propTypes = {};

export default DefaultMeta;
