import Login from "@/lib/auth/components/login";
import withPageContext from "@/lib/common/utils/withPageContext";


export default withPageContext( () => (<Login/>),
{
    loginRequired: false,
    pageTitle: 'Login',
    enableLayout: false,
})