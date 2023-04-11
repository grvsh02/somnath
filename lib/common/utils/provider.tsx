import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import PrefetchContext, { ProfileContextType } from './context';
import { isResponseValid } from './response';

export type PageContextChildrenProps = {
    profile?: ProfileContextType,
    setProfile?: (profile: ProfileContextType) => void,
    data: Partial<(any | object)>,
    setData: (data: Partial<(any | object)>) => void,
    query?: any
};

type Provider = {
    loginRequired?: boolean,
    data?: any,
    query?: any,
    profile?: any,
    children?: ((data: Partial<PageContextChildrenProps>) => React.ReactElement)
}

const ContextProvider = ({ profile: _profile = null, data: _data, loginRequired = false, children
}: Provider) => {

    const [profile, setProfile] = useState(_profile);
    const [data, setData] = useState(_data);
    const [showPage, setShowPage] = useState(!loginRequired);
    const router = useRouter();

    const fetchData = async () => {
        if (!!sessionStorage.getItem('user_profile')) {
            return JSON.parse(sessionStorage.getItem('user_profile') || "null");
        }
    }

    useEffect(() => {
        if (loginRequired && profile === null) {
            fetchData().then(data => {
                if (data) {
                    setProfile(data);
                    setShowPage(true);
                } else {
                    router.push({
                        // pathname: Routes.login(),
                        query: { nextRoute: router.pathname }
                    });
                }
            });
        } else {
            setShowPage(true);
        }
    }, [profile]);

    return (
        <PrefetchContext.Provider value={{ profile, setProfile, data, setData, reload: fetchData }}>
            {(!!children && showPage) ? children({ data, profile, setProfile, setData })
                :
                <div className='h-screen w-screen bg-slate-50 dark:bg-slate-900'></div>}
        </PrefetchContext.Provider>
    );

};

export default ContextProvider;
