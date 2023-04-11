import React, {useEffect, useState} from "react"
import {Typography, Breadcrumbs, Card, Textarea, Input, Button} from "@material-tailwind/react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Alert } from "@material-tailwind/react";
import {ApiService} from "@/lib/common/services/api.services";

const events = [{
    id: 1,
    color: '#4154F1',
    from: '2019-05-02T18:00:00+00:00',
    to: '2019-05-05T19:00:00+00:00',
    title: 'This is an event'
}, {
    id: 2,
    color: '#4154F1',
    from: '2019-05-01T13:00:00+00:00',
    to: '2019-05-05T14:00:00+00:00',
    title: 'This is another event'
}, {
    id: 3,
    color: '#4154F1',
    from: '2019-05-05T13:00:00+00:00',
    to: '2019-05-05T20:00:00+00:00',
    title: 'This is also another event'
}];

const CheckOut = () => {

    const [time, setTime] = useState(new Date());

    const options:any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = time.toLocaleDateString(undefined, options);
    const formattedTime = time.toLocaleTimeString();
    const [checkedOut, setCheckedOut] = useState(false)
    const [checkTime, setCheckTime] = useState({
        date: "",
        time: ""
    })
    const [checkOutMessage, setCheckOutMessage] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const checkStatus = async () => {
            const res = await ApiService.get("http://127.0.0.1:8000/api/attendance/status/")
            console.log(res)
            if (res?.data?.data?.check_out){
                const options:any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                const dateObject = new Date(res?.data.data.check_out);
                const formattedDate = dateObject.toLocaleDateString(undefined, options);
                const formattedTime = dateObject.toLocaleTimeString();
                setCheckedOut(true)
                setCheckTime({date: formattedDate, time: formattedTime})
            } else if (!res?.data?.data?.check_in){
                setShowAlert(true)
            }
        }
        checkStatus()
    }, [])

    const handleCheckOut = async () => {
        const response = await ApiService.postForm("http://127.0.0.1:8000/api/check/out/", {
            check_out_message: checkOutMessage
        })
        console.log(response)
        setCheckedOut(true)
        setCheckTime({date: formattedDate, time: formattedTime})
    }

    return (
        <div className="w-full pr-14">
            <div className="my-3">
                <Typography variant="h2" color="indigo">Check Out</Typography>
                <Breadcrumbs color="indigo" >
                    <a href="#" className="opacity-40">
                        Home
                    </a>
                    <a href="#" className="opacity-90">
                        Check Out
                    </a>
                </Breadcrumbs>
            </div>
            <Card className="p-12">
                <Typography variant="h4" suppressHydrationWarning>Mark Attendance for today ({formattedDate})</Typography>
                <Typography variant="lead">You can mark your attendance for today. For any other day, please use the edit option below.</Typography>
                {checkedOut ? (
                    <div className="my-8">
                        <Alert color="indigo">You have successfully checked out for {checkTime.date} at {checkTime.time}</Alert>
                    </div>
                ) : showAlert ? (
                    <div className="my-8">
                        <Alert color="red">You have not checked in for today. Please check in first.</Alert>
                    </div>
                    ) : (
                    <div className="flex py-8">
                        <div className="w-1/2">
                            <div className="flex">
                                <div className="w-1/2 my-3 mr-2">
                                    <Input value={formattedDate} label="Check out date" disabled/>
                                </div>
                                <div className="w-1/2 my-3 ml-2">
                                    <Input value={formattedTime} label="Check out time" disabled/>
                                </div>
                            </div>
                            <div className="my-4">
                                <Textarea color="indigo" label="Message" rows={10} value={checkOutMessage} onChange={e => setCheckOutMessage(e.currentTarget.value)}/>
                            </div>
                            <div className="flex justify-end">
                                <Button color="indigo" onClick={() => handleCheckOut()} className="px-12 py-4">Check Out</Button>
                            </div>
                        </div>
                        <div className="w-1/2 flex item-center justify-center">
                            <div className="shadow-lg">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateCalendar />
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div>
                )}
            </Card>
        </div>
    )

}

export default CheckOut;