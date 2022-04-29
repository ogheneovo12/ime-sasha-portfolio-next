import React from "react";
import SEO from "./Seo";
import { useTranslation } from "next-i18next";

function DefaultMeta(props) {
  const { t } = useTranslation("translations");

  return (
    <SEO
      image="/img/imesasha.png"
      title={t("meta.title")}
      description={t("meta.description")}
      keywords={t("meta.keywords")}
      metas={[
        {
          property: "og:url",
          content: t("meta.og.url"),
        },
        {
          property: "og:site_name",
          content: t("meta.og.site_name"),
        },
        {
          property: "og:type",
          content: t("meta.og.type"),
        },
        {
          property: "og:title",
          content: t("meta.og.title"),
        },
        {
          property: "og:description",
          content: t("meta.og.description"),
        },
        {
          property: "og:image",
          content: t("meta.og.image"),
        },
        {
          property: "twitter:card",
          content: t("meta.twitter.card"),
        },
        {
          property: "twitter:site",
          content: t("meta.twitter.site"),
        },
        {
          property: "twitter:title",
          content: t("meta.twitter.title"),
        },
        {
          property: "twitter:description",
          content: t("meta.twitter.description"),
        },
        {
          property: "twitter:image",
          content: t("meta.twitter.image"),
        },
        {
          property: "twitter:image:src",
          content: t("meta.twitter.image_src"),
        },
      ]}
    />
  );
}

DefaultMeta.propTypes = {};

export default DefaultMeta;
