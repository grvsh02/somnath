import {Routes} from "@/lib/common/utils/routes";

export interface TabItemsProps {
    label?: string;
    key: string;
    path?: string;
}

const adminDashboardTab: TabItemsProps = {
    label: "Dashboard",
    key: "adminDashboard",
    path: Routes.dashboard(),
};

const attendanceTab: TabItemsProps = {
    label: "Attendance Sheet",
    key: "attendance",
    path: Routes.checkIn(),
};

const timeTab: TabItemsProps = {
    label: "Time Sheet",
    key: "timeSheet",
    path: Routes.checkOut(),
};

const locationTab: TabItemsProps = {
    label: "Manage Locations",
    key: "locations",
    path: Routes.leaveRequest(),
};

export const adminPathTabMap: Map<string, TabItemsProps> = new Map([
    [Routes.dashboard(), adminDashboardTab],
    [Routes.checkIn(), attendanceTab],
    [Routes.checkOut(), timeTab],
    [Routes.leaveRequest(), locationTab],
]);

export const adminKeyTabMap: Map<string, TabItemsProps> = new Map([
    ["dashboard", adminDashboardTab],
    ["checkIn", attendanceTab],
    ["checkOut", timeTab],
    ["leaveRequest", locationTab]
]);