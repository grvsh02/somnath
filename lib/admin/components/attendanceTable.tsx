import React, {useEffect} from "react";
import DataTable from "react-data-table-component";
import {CheckIcon, ArrowDownTrayIcon} from "@heroicons/react/20/solid";
import {useRouter} from "next/router";

const data = [
    {
        employee: 'Tiger Nixon',
        attendance: [
            {
                date: "2023/04/22",
                checked: true,
            },
            {
                date: "2023/04/23",
                checked: false,
            },
            {
                date: "2023/04/24",
                checked: true,
            },
            {
                date: "2023/04/25",
                checked: true,
            },
            {
                date: "2023/04/26",
                checked: true,
            },
            {
                date: "2023/04/27",
                checked: true,
            },
            {
                date: "2023/04/28",
                checked: true,
            },
            {
                date: "2023/04/29",
                checked: false,
            }
        ]
    },
    {
        employee: 'Tiger Nixon',
        attendance: [
            {
                date: "2023/04/22",
                checked: true,
            },
            {
                date: "2023/04/23",
                checked: true,
            },
            {
                date: "2023/04/24",
                checked: true,
            },
            {
                date: "2023/04/25",
                checked: true,
            },
            {
                date: "2023/04/26",
                checked: true,
            },
            {
                date: "2023/04/27",
                checked: true,
            },
            {
                date: "2023/04/28",
                checked: false,
            },
            {
                date: "2023/04/29",
                checked: true,
            }
        ]
    },
    {
        employee: 'Tiger Nixon',
        attendance: [
            {
                date: "2023/04/22",
                checked: true,
            },
            {
                date: "2023/04/23",
                checked: true,
            },
            {
                date: "2023/04/24",
                checked: true,
            },
            {
                date: "2023/04/25",
                checked: true,
            },
            {
                date: "2023/04/26",
                checked: false,
            },
            {
                date: "2023/04/27",
                checked: true,
            },
            {
                date: "2023/04/28",
                checked: true,
            },
            {
                date: "2023/04/29",
                checked: true,
            }
        ]
    },
    {
        employee: 'Tiger Nixon',
        attendance: [
            {
                date: "2023/04/22",
                checked: true,
            },
            {
                date: "2023/04/23",
                checked: false,
            },
            {
                date: "2023/04/24",
                checked: true,
            },
            {
                date: "2023/04/25",
                checked: true,
            },
            {
                date: "2023/04/26",
                checked: true,
            },
            {
                date: "2023/04/27",
                checked: true,
            },
            {
                date: "2023/04/28",
                checked: true,
            },
            {
                date: "2023/04/29",
                checked: false,
            }
        ]
    },
]

const customStyles = {
    rows: {
        style: {
            minHeight: '62px',
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
        },
    },
};

const AttendanceTable = ({id = ""}: any) => {

    const [books, setBooks] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [reload, setReload] = React.useState(false);

    const router = useRouter();
    const {query: queryList} = router;

    const columns = [
        {
            name: 'Employee',
            selector: (row: any) => row.employee,
        },
        {
            name: data[0].attendance[0].date,
            selector: (row: any) => row.attendance[0].checked ? <CheckIcon className="ml-6 w-5 h-5 text-indigo-300"/> : "-",
        },
        {
            name: data[0].attendance[1].date,
            selector: (row: any) => row.attendance[1].checked ? <CheckIcon className="ml-6 w-5 h-5 text-indigo-300"/> : "-",
        },
        {
            name: data[0].attendance[2].date,
            selector: (row: any) => row.attendance[2].checked ? <CheckIcon className="ml-6 w-5 h-5 text-indigo-300"/> : "-",
        },
        {
            name: data[0].attendance[3].date,
            selector: (row: any) => row.attendance[3].checked ? <CheckIcon className="ml-6 w-5 h-5 text-indigo-300"/> : "-",
        },
        {
            name: data[0].attendance[4].date,
            selector: (row: any) => row.attendance[4].checked ? <CheckIcon className="ml-6 w-5 h-5 text-indigo-300"/> : "-",
        },
        {
            name: data[0].attendance[5].date,
            selector: (row: any) => row.attendance[5].checked ? <CheckIcon className="ml-6 w-5 h-5 text-indigo-300"/> : "-",
        },
        {
            name: data[0].attendance[6].date,
            selector: (row: any) => row.attendance[6].checked ? <CheckIcon className="ml-6 w-5 h-5 text-indigo-300"/> : "-",
        },
    ]

    if (error) {
        return <p>Error :(</p>;
    }


    return (
        <DataTable
            columns={columns}
            data={data}
            highlightOnHover={true}
            customStyles={customStyles}
            pagination={true}
            // onRowClicked={(row) => router.push(`/book/${row.book_id}`)}
        />
    );
}

export default AttendanceTable;