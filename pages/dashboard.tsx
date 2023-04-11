import withPageContext from "@/lib/common/utils/withPageContext";
import Dashboard from "@/lib/dashboard";



export default withPageContext( () => (<Dashboard/>),
    {
        loginRequired: false,
        pageTitle: 'DashBoard',
        enableLayout: true,
    })