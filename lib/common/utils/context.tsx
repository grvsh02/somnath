import {ParsedUrlQuery} from "querystring";
import {createContext} from "react";

export type ProfileContextType = {
    first_name?: string;
    last_name?: string;
    email?: string;
    img_url?: string;
    company_name?: string;
    username?: string;
};

export type PrefetchContext = {
    profile: ProfileContextType | null,
    setProfile: (profile: ProfileContextType) => void,
    data: Partial<any|object> | null,
    setData: (data: Partial<any|object>) => void,
    reload: () => void,
};

const PrefetchContext = createContext<PrefetchContext>({
    profile: null,
    setProfile: () => {},
    data: null,
    setData: () => {},
    reload: () => {},
});

export default PrefetchContext;