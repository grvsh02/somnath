import React, {useEffect, useState} from "react";
import {Button, Input, Select, Textarea, Typography, Option} from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/20/solid"
import LeaveCalender from "@/lib/leaveRequest/leaveCalender";
import {ApiService} from "@/lib/common/services/api.services";
import {isResponseValid} from "@/lib/common/utils/response"
import dynamic from "next/dynamic";
import {useRouter} from "next/router";

const Checkmark= dynamic(
    () => import('react-typescript-checkmark'),
    { ssr: false }
)

const ApplyLeaves = ({setApply}: any) => {

    const [from, setFrom] = useState<any>();
    const [to, setTo] = useState<any>();
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false)

    console.log("from",from)
    console.log("to", to)

    const router = useRouter();

    useEffect(() => {
        // Set a timer to redirect after 3 seconds
        const timer = setTimeout(() => {
            setSent(false)
            router.push('/leave_request#')
        }, 3000);

        // Clean up the timer when the component unmounts or when the effect runs again
        return () => {
            clearTimeout(timer);
        };
    }, [sent]);

    const handleLeaveRequest = async () => {
        const response = await ApiService.post("http://10.31.248.137:8000/api/leave/request/", {
            start_date: {from},
            end_date: {to},
            reason: message,
        })
        console.log(response)
        if (isResponseValid(response)) {
            setSent(true)
        }
    }

    if (sent){
        return (
            <div>
                <Checkmark
                    size='xl'
                    backgroundColor='blue'
                    animationDuration={0.8}
                    explosion={1.2}
                />
                <div className="w-full flex justify-center mt-8">
                    <Typography variant="h4" suppressHydrationWarning>Leave Request Sent. Redirecting ...</Typography>
                </div>
            </div>
        )
    } else {
        return (
            <div className="w-full">
                <div className="flex justify-between">
                    <div>
                        <Typography variant="h4" suppressHydrationWarning>Apply for leaves</Typography>
                        <Typography variant="lead">You can raise your Leave Requests here. New leave requests need approval from admins.</Typography>
                    </div>
                    <div className="pt-4">
                        <Button color="indigo" variant="outlined" size="sm" className="py-3 px-8 flex items-center gap-3" onClick={() => setApply(false)}>View Leaves <ArrowRightIcon className="h-5 w-5 pb-0.5"/></Button>
                    </div>
                </div>
                <div className="flex pt-14 w-full">
                    <div className="w-2/3">
                        <div className="mt-8 w-1/2 pr-3">
                            <Select label="Select Type" color="indigo">
                                <Option>Regular Leave</Option>
                                <Option>Medical Leave</Option>
                                <Option>Half Day</Option>
                            </Select>
                        </div>
                        <div className="flex mt-6">
                            <div className="w-1/2 mr-2">
                                <Input value={from ? from.day.toString() + "/" + from.month.toString() + "/" + from.year.toString() : ""} label="from" disabled/>
                            </div>
                            <div className="w-1/2 ml-2">
                                <Input value={to ? to.day.toString() + "/" + to.month.toString() + "/" + to.year.toString() : ""} label="to" disabled/>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Textarea value={message} label="message" color="indigo" onChange={e => setMessage(e.currentTarget.value)} />
                        </div>
                        <div className="mt-8 w-full flex justify-end">
                            <Button color="indigo" variant="gradient" onClick={handleLeaveRequest}>Apply</Button>
                        </div>
                    </div>
                    <div className="w-1/3 flex justify-center">
                        <LeaveCalender setFrom={setFrom} setTo={setTo}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default ApplyLeaves;