import React, {useEffect, useState} from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";

const LeaveCalender = ({setFrom = () => {}, setTo = () => {}} : any) => {

    const today = new Date();

    console.log(today.getDate(), today.getMonth(), today.getFullYear())

    const defaultFrom = {
        year: today.getFullYear(),
        month: today.getMonth()+1,
        day: today.getDate(),
    };
    const defaultTo = {
        year: today.getFullYear(),
        month: today.getMonth()+1,
        day: today.getDate(),
    };
    const defaultValue = {
        from: defaultFrom,
        to: defaultTo,
    };
    const [selectedDayRange, setSelectedDayRange] = useState(
        defaultValue
    );

    useEffect(() => {
        setFrom(selectedDayRange.from)
        setTo(selectedDayRange.to)
    }, [selectedDayRange])

    return (
        <Calendar
            value={selectedDayRange}
            // @ts-ignore
            onChange={setSelectedDayRange}
            colorPrimary="#5F6EF1" // added this
            colorPrimaryLight="rgba(95, 110, 241, 0.3)" // and this
            shouldHighlightWeekends
        />
    );
};

export default LeaveCalender;