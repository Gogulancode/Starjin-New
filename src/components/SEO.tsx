/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet-async";

const SEO = ({ pageTitle }: any) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle} - StaraJIN | Korea-India Business Consulting</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="Zibber - Consulting React Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
    </>
  );
};

export default SEO;