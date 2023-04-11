import withPageContext from "@/lib/common/utils/withPageContext";
import CheckOut from "@/lib/checkOut";
import Leave_request from "@/pages/leave_request";
import LeaveRequest from "@/lib/leaveRequest";


export default withPageContext(() => <LeaveRequest/>,
    {
        loginRequired: false,
        pageTitle: "Leaves",
        enableLayout: true
    })