import React, {useEffect, useState} from 'react';
import {Avatar, Button, Card, Chip, Input, Typography} from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/20/solid"
import {ApiService} from "@/lib/common/services/api.services";
import {isResponseValid} from "@/lib/common/utils/response";


const ViewLeaves = ({setApply}: any) => {

    const [leaveRequests, setLeaveRequests] = useState<any>([])


    useEffect(() => {
        const getLeaveRequests = async () => {
            const response = await ApiService.get("http://127.0.0.1:8000/api/leave/requests/")
            console.log(response)
            if (isResponseValid(response)) {
                setLeaveRequests(response?.data.data)
            }
        }
        getLeaveRequests()
    }, [])

    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <Typography variant="h4" suppressHydrationWarning>Showing your last {leaveRequests.length} Leave Requests</Typography>
                    <Typography variant="lead">You can check the status of your recent leave requests and see your recent request history.</Typography>
                </div>
                <div className="pt-4">
                    <Button color="indigo" variant="outlined" size="sm" className="py-3 px-8 flex items-center gap-3" onClick={() => setApply(true)}>Apply for leave <ArrowRightIcon className="h-5 w-5 pb-0.5"/></Button>
                </div>
            </div>
            <div className="grid gap-4 grid-cols-4 grid-flow-row-dense my-8 w-5/6 ">
                {leaveRequests.map((leave: any)  => {
                    return (
                        <Card key="" color="indigo" variant="gradient" className="w-full max-w-[20rem] p-8">
                            <div className="flex">
                                <div className="w-2/3">
                                    <div className="my-2">
                                        <Typography variant="small">From:  </Typography><Typography variant="lead">{leave.start_date}</Typography>
                                    </div>
                                    <div className="my-2">
                                        <Typography variant="small">To:  </Typography><Typography variant="lead">{leave.end_date}</Typography>
                                    </div>
                                </div>
                                <div className="flex w-1/3 justify-end">
                                    <div>
                                        <Chip
                                            icon={
                                                <Avatar
                                                    size="xs"
                                                    variant="circular"
                                                    className="h-5 w-5 translate-x-px translate-y-px"
                                                    alt="candice wu"
                                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                                />
                                            }
                                            // @ts-ignore
                                            value={
                                                <Typography
                                                    variant="small"
                                                    color="white"
                                                    className="font-medium capitalize leading-none"
                                                >
                                                    {leave.status}
                                                </Typography>
                                            }
                                            color={leave.status === "approved" ? "teal" : leave.status === "pending" ? "amber" : "red"}
                                            className="rounded-full py-1.5"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2">
                                <Input value={leave.reason} label="Message" className="text-slate-200" disabled/>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default ViewLeaves;