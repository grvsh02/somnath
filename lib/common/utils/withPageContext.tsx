import React from 'react';

import ContextProvider, { PageContextChildrenProps } from './provider';
import { AuthProvider } from "../context/auth.context";
import Layout from "../layouts/mainLayout";
import Head from 'next/head';
import AdminLayout from "@/lib/common/layouts/adminLayout";


export type PageContextOptions = {
    data?: any,
    loginRequired?: boolean,
    enableLayout?: boolean
    pageTitle?: string
    adminView?: boolean
};

const COMMON_DESCRIPTION = `An attendance management platform which fits any organization of any size and any domain`

const withPageContext = (
    Component: React.FunctionComponent<Partial<PageContextChildrenProps>>,
    options: PageContextOptions = { data: null, loginRequired: false, enableLayout: true, pageTitle: "", adminView: false }
    // eslint-disable-next-line react/display-name
) => ({ profile, properties, query }: any) => {
    const { data, loginRequired, enableLayout, adminView } = options;
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
                </Head>
                {enableLayout ? adminView ? (
                    <AdminLayout> <Component {...props} /> </AdminLayout>
                    ) : (
                        <Layout> <Component {...props} /> </Layout>
                    ) : <Component {...props} />
                }
            </AuthProvider>
        )}</ContextProvider>
    );
};

export default withPageContext;