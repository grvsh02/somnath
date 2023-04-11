import withPageContext from "@/lib/common/utils/withPageContext";
import CheckIn from "@/lib/checkIn";


export default withPageContext(() => <CheckIn/>,
    {
        loginRequired: false,
        pageTitle: "Check In",
        enableLayout: true
    }
)