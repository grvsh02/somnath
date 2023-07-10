import React, {useState} from 'react';
import {Alert, Breadcrumbs, Button, Card, Chip, Input, Textarea, Typography, Avatar} from "@material-tailwind/react";
import ViewLeaves from "@/lib/leaveRequest/view";
import ApplyLeaves from "@/lib/leaveRequest/apply";
import ListLocations from "@/lib/admin/components/listLocations";

const ManageRequest = () => {

    const [apply, setApply] = useState(false)

    return (
        <div className="w-full pr-14">
            <div className="my-3">
                <Typography variant="h2" color="indigo">Locations</Typography>
                <Breadcrumbs color="indigo">
                    <a href="#" className="opacity-40">
                        Home
                    </a>
                    <a href="#" className="opacity-90">
                        Manages Locations
                    </a>
                </Breadcrumbs>
            </div>
            <Card className="p-12">
                {apply ? (
                    <ApplyLeaves setApply={(value: any) => setApply(value)}/>
                ): (
                    <ListLocations setApply={(value: any) => setApply(value)}/>
                )}
            </Card>
        </div>
    )
}

export default ManageRequest;