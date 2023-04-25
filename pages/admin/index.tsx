import withPageContext from "@/lib/common/utils/withPageContext";
import AdminDashboard from "@/lib/admin";

export default withPageContext( () => (<AdminDashboard/>),
    {
        loginRequired: true,
        pageTitle: 'DashBoard',
        enableLayout: true,
    })