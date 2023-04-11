import React from 'react';

import ContextProvider, { PageContextChildrenProps } from './provider';
import { AuthProvider } from "../context/auth.context";
import Layout from "../layouts/mainLayout";
import Head from 'next/head';


export type PageContextOptions = {
  data?: any,
  loginRequired?: boolean,
  enableLayout?: boolean
  pageTitle?: string
};

const COMMON_DESCRIPTION = `The last no-code AI platform you will ever need. Simplismart makes it easier for researchers and businesses to build and deploy machine learning models. It lets you manage your machine learning lifecycle within minutes without any coding. Learn more about how Simplismart works and how other users are leveraging it to power their software and decisions.`

const withPageContext = (
  Component: React.FunctionComponent<Partial<PageContextChildrenProps>>,
  options: PageContextOptions = { data: null, loginRequired: false, enableLayout: true, pageTitle: "" }
  // eslint-disable-next-line react/display-name
) => ({ profile, properties, query }: any) => {
  const { data, loginRequired, enableLayout } = options;
  console.log("withPageContext", data);

  const [currentPageTitle, setCurrentPageTitle] = React.useState(options.pageTitle || "");

  React.useEffect(() => {
    if (options.pageTitle) {
      setCurrentPageTitle(`${options.pageTitle} | CCUBE`);
    } else {
      setCurrentPageTitle("CCUBE");
    }
  }, [options.pageTitle]);

  return (
    <ContextProvider
      data={data}
      loginRequired={loginRequired}
    >{(props) => (
      <AuthProvider>
        <Head>
          <title>{currentPageTitle}</title>

          {/* <!-- HTML Meta Tags --> */}
          <meta name="description" content={COMMON_DESCRIPTION} />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="" />
          <meta name="twitter:title" content={currentPageTitle} />
          <meta name="twitter:description" content={COMMON_DESCRIPTION} />
          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:site_name" content="" />
          <meta property="og:title" content={currentPageTitle} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={COMMON_DESCRIPTION} />
        </Head>
        {enableLayout ? (
          <Layout> <Component {...props} /> </Layout>
        ) : <Component {...props} />}
      </AuthProvider>
    )}</ContextProvider>
  );
};

export default withPageContext;