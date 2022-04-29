import Head from "next/head";
import React from "react";

const SEO = ({ title, description, keywords, image, metas = [] }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="image" content={image} />
    <meta property="keywords" content={keywords} />
    {Array.isArray(metas) &&
      metas?.map((info) => (
        <meta
          key={info?.property}
          property={info?.property}
          content={info?.content}
        />
      ))}
  </Head>
);

export default SEO;
