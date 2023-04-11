import withPageContext from "@/lib/common/utils/withPageContext";
import CheckOut from "@/lib/checkOut";


export default withPageContext(() => <CheckOut/>,
    {
        loginRequired: false,
        pageTitle: "Check In",
        enableLayout: true
    })