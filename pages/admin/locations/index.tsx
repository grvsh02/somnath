import withPageContext from "@/lib/common/utils/withPageContext";
import ManageLocations from "@/lib/admin/views/manageLocations";

export default withPageContext( () => (<ManageLocations/>),
    {
        loginRequired: true,
        pageTitle: 'DashBoard',
        enableLayout: true,
        adminView: true
    })