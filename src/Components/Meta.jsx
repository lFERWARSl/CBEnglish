import React from "react";
import { Helmet } from "react-helmet";
function Meta({pageTitle}) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Helmet>
    </>
  );
}

export default Meta;
