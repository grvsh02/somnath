import withPageContext from "@/lib/common/utils/withPageContext";
import LeaveRequest from "@/lib/leaveRequest";


export default withPageContext(() => <LeaveRequest/>,
    {
        loginRequired: false,
        pageTitle: "Leaves",
        enableLayout: true
    })