import withPageContext from "@/lib/common/utils/withPageContext";
import AttendanceSheet from "@/lib/admin/views/attendance";

export default withPageContext( () => (<AttendanceSheet/>),
    {
        loginRequired: true,
        pageTitle: 'DashBoard',
        enableLayout: true,
        adminView: true
    })