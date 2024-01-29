import React, {useEffect, useState} from "react"
import {Typography, Breadcrumbs, Card, Textarea, Input, Button, Select, Option} from "@material-tailwind/react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Alert } from "@material-tailwind/react";
import {ApiService} from "@/lib/common/services/api.services";

const CheckIn = () => {

    const [time, setTime] = useState(new Date());

    const [locations, setLocations] = useState([])
    const [location, setLocation] = useState("")
    const [otherLocation, setOtherLocation] = useState("")
    const options:any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = time.toLocaleDateString(undefined, options);
    const formattedTime = time.toLocaleTimeString();
    const [checkedIn, setCheckedIn] = useState(false)
    const [checkTime, setCheckTime] = useState({
        date: "",
        time: ""
    })
    const [checkInMessage, setCheckInMessage] = useState("")

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
            const res = await ApiService.get("http://10.31.248.137:8000/api/attendance/status/")
            console.log(res)
            if (res?.data?.data?.check_in){
                const options:any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                const dateObject = new Date(res?.data.data.check_in);
                const formattedDate = dateObject.toLocaleDateString(undefined, options);
                const formattedTime = dateObject.toLocaleTimeString();
                setCheckedIn(true)
                setCheckTime({date: formattedDate, time: formattedTime})
            } else {
                setLocations(res?.data?.data?.locations)
            }
        }
        checkStatus()
    }, [])

    const handleCheckIn = async () => {
        const response = await ApiService.postForm("http://10.31.248.137:8000/api/check/in/", {
            check_in_message: checkInMessage,
            location_id: location,
            other_location: otherLocation
        })
        console.log(response)
        setCheckedIn(true)
        setCheckTime({date: formattedDate, time: formattedTime})
    }

    return (
        <div className="w-full pr-14">
            <div className="my-3">
                <Typography variant="h2" color="indigo">Check In</Typography>
                <Breadcrumbs color="indigo">
                    <a href="#" className="opacity-40">
                        Home
                    </a>
                    <a href="#" className="opacity-90">
                        Check In
                    </a>
                </Breadcrumbs>
            </div>
            <Card className="p-12">
                <Typography variant="h4" suppressHydrationWarning>Mark Attendance for today ({formattedDate})</Typography>
                <Typography variant="lead">You can mark your attendance for today. For any other day, please use the edit option below.</Typography>
                {checkedIn ? (
                    <div className="my-8">
                        <Alert color="indigo">You have successfully checked in for {checkTime.date} at {checkTime.time}</Alert>
                    </div>
                ): (
                    <div className="flex py-8">
                        <div className="w-1/2">
                            <div className="flex">
                                <div className="w-1/2 my-3 mr-2">
                                    <Input value={formattedDate} label="Check in date" disabled/>
                                </div>
                                <div className="w-1/2 my-3 ml-2">
                                    <Input value={formattedTime} label="Check in time" disabled/>
                                </div>
                            </div>
                            <div className="mt-3 flex">
                                {/*@ts-ignore*/}
                                <div className={`mr-2 ${locations?.find(o => o.name === "others")?.id === 2 ? "w-1/2" : "w-full"}`}>
                                    <Select label="Location" color="indigo" onChange={(value: any) => {
                                        setLocation(value)
                                        console.log(value)
                                    }}>
                                        {locations?.map((location: any) => (
                                            <Option value={location.id} key={location.id}><div className="flex items-center"><Typography variant="h6">{location.name}</Typography>{location.address && (
                                                <Typography variant="small" className="ml-2">{location.address + ", " + location.city + ", " + location.state}</Typography>
                                            )}</div></Option>
                                        ))}
                                    </Select>
                                </div>
                                {/*@ts-ignore*/}
                                {locations?.find(o => o.name === "others")?.id === location && (
                                    <div className="ml-2 w-1/2">
                                        <Input label="Other Location" onChange={e => setOtherLocation(e.currentTarget.value)}></Input>
                                    </div>
                                )}
                            </div>
                            <div className="my-6">
                                <Textarea color="indigo" label="Message" rows={10} value={checkInMessage} onChange={e => setCheckInMessage(e.currentTarget.value)}/>
                            </div>
                            <div className="flex justify-end">
                                <Button color="indigo" onClick={() => handleCheckIn()} className="px-12 py-4">Check In</Button>
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

export default CheckIn;