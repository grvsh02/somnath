import React from "react";
import {Breadcrumbs, Button, Typography} from "@material-tailwind/react";
import {Card} from "@material-tailwind/react";
import AttendanceTable from "@/lib/admin/components/attendanceTable";
import {ArrowDownTrayIcon} from "@heroicons/react/20/solid";

const AttendanceSheet = () => {
    return (
        <div className="w-full pr-14">
            <div className="my-3">
                <Typography variant="h2" color="indigo">Attendance Sheet</Typography>
                <Breadcrumbs color="indigo">
                    <a href="#" className="opacity-40">
                        Home
                    </a>
                    <a href="#" className="opacity-90">
                        Attendance Sheet
                    </a>
                </Breadcrumbs>
            </div>
            <Card className="p-12">
                <div className="flex">
                    <div className="w-full">
                        <Typography variant="h4" suppressHydrationWarning>Showing attendance for last 7 days</Typography>
                        <Typography variant="lead">You can view attendance for last 7 days. For all records please contact support</Typography>
                    </div>
                    <div className="flex justify-end border pt-2">
                        <Button className="flex items-center mb-3 px-12" variant="outlined" color="indigo"><div className="pt-0.5">Export</div> <ArrowDownTrayIcon className="w-5 ml-3 h-5"/></Button>
                    </div>
                </div>
                <div className="mt-8">
                    <AttendanceTable/>
                </div>
            </Card>
        </div>
  );
};

export default AttendanceSheet;