import {Routes} from "@/lib/common/utils/routes";

export interface TabItemsProps {
    label?: string;
    key: string;
    path?: string;
}

const dashboardTab: TabItemsProps = {
    label: "Dashboard",
    key: "dashboard",
    path: Routes.dashboard(),
};

const checkInTab: TabItemsProps = {
    label: "Check In",
    key: "checkIn",
    path: Routes.checkIn(),
};

const checkOutTab: TabItemsProps = {
    label: "Check Out",
    key: "checkOut",
    path: Routes.checkOut(),
};

const LeaveRequestTab: TabItemsProps = {
    label: "Leave Request",
    key: "leaveRequest",
    path: Routes.leaveRequest(),
};

export const pathTabMap: Map<string, TabItemsProps> = new Map([
    [Routes.dashboard(), dashboardTab],
    [Routes.checkIn(), checkInTab],
    [Routes.checkOut(), checkOutTab],
    [Routes.leaveRequest(), LeaveRequestTab],
]);

export const keyTabMap: Map<string, TabItemsProps> = new Map([
    ["dashboard", dashboardTab],
    ["checkIn", checkInTab],
    ["checkOut", checkOutTab],
    ["leaveRequest", LeaveRequestTab]
]);