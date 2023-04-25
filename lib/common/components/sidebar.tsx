import React from "react";
import {Card, Button} from "@material-tailwind/react";
import {useRouter} from "next/router";
import {keyTabMap, pathTabMap} from "@/lib/common/utils/sidebarConfig";
import {Cog8ToothIcon} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const router = useRouter();

  const getKeyFromPath = () => {
    const path = router.pathname;
    let pathList = path.split('/');
    let basePath = '/';
    if (pathList.length > 1) basePath = `/${pathList[1]}`;
    if (pathTabMap.has(basePath)) {
      return pathTabMap.get(basePath)!.key;
    }
    return undefined;
  };

  const [selected, setSelected] = React.useState(getKeyFromPath());

  const updateRoute = (key: string) => {
    if (!keyTabMap.has(key)) return;
    const newTab = keyTabMap.get(key)!;
    router.push(`${newTab.path}`);
  };

  return (
      <div
          className="z-20 hidden w-64 h-full overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
      >
        <div className="py-4 text-gray-500 dark:text-gray-400 flex flex-col h-full">
          <ul>
            <li className={`relative px-6 pb-3 pt-5 hover:cursor-pointer drop-shadow-md ${selected == "dashboard" ? "bg-indigo-50" : ""}`}>
              {selected === "dashboard" && (
                  <span
                      className="absolute inset-y-0 left-0 w-1 bg-indigo-500 drop-shadow-md"
                      aria-hidden="true"
                  ></span>
              )}
              <a
                  className={`inline-flex items-center w-full text-sm ${selected == "dashboard" ? "text-indigo-500 font-bold" : "font-semibold"} transition-colors duration-150 hover:text-indigo-400 dark:hover:text-gray-200 dark:text-gray-100`}
                  onClick={() => {
                    setSelected(pathTabMap.get("/dashboard")!.key)
                    updateRoute(pathTabMap.get("/dashboard")!.key)
                  }}
              >
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                <span className="ml-4">Dashboard</span>
              </a>
            </li>
            <li className={`relative px-6 pb-3 pt-5 hover:cursor-pointer drop-shadow-md ${selected == "checkIn" ? "bg-indigo-50" : ""}`}>
              {selected === "checkIn" && (
                  <span
                      className="absolute inset-y-0 left-0 w-1 bg-indigo-500 drop-shadow-md"
                      aria-hidden="true"
                  ></span>
              )}
              <a
                  className={`inline-flex items-center w-full text-sm ${selected == "checkIn" ? "text-indigo-500 font-bold" : "font-semibold"} transition-colors duration-150 hover:text-indigo-400 dark:hover:text-gray-200 dark:text-gray-100`}
                  onClick={() => {
                    setSelected(pathTabMap.get("/checkin")!.key)
                    updateRoute(pathTabMap.get("/checkin")!.key)
                  }}
              >
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
                <span className="ml-4">Check In</span>
              </a>
            </li>
            <li className={`relative px-6 pb-3 pt-5 hover:cursor-pointer drop-shadow-md ${selected == "checkOut" ? "bg-indigo-50" : ""}`}>
              {selected === "checkOut" && (
                  <span
                      className="absolute inset-y-0 left-0 w-1 bg-indigo-500 drop-shadow-md"
                      aria-hidden="true"
                  ></span>
              )}
              <a
                  className={`inline-flex items-center w-full text-sm ${selected == "checkOut" ? "text-indigo-500 font-bold" : "font-semibold"} transition-colors duration-150 hover:text-indigo-400 dark:hover:text-gray-200 dark:text-gray-100`}
                  onClick={() => {
                    setSelected(pathTabMap.get("/checkout")!.key)
                    updateRoute(pathTabMap.get("/checkout")!.key)
                  }}
              >
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  ></path>
                  <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                <span className="ml-4">Check Out</span>
              </a>
            </li>
            <li className={`relative px-6 pb-3 pt-5 hover:cursor-pointer drop-shadow-md ${selected == "leaveRequest" ? "bg-indigo-50" : ""}`}>
              {selected === "leaveRequest" && (
                  <span
                      className="absolute inset-y-0 left-0 w-1 bg-indigo-500 drop-shadow-md"
                      aria-hidden="true"
                  ></span>
              )}
              <a
                  className={`inline-flex items-center w-full text-sm ${selected == "leaveRequest" ? "text-indigo-500 font-bold" : "font-semibold"} transition-colors duration-150 hover:text-indigo-400 dark:hover:text-gray-200 dark:text-gray-100`}
                  onClick={() => {
                    setSelected(pathTabMap.get("/leave_request")!.key)
                    updateRoute(pathTabMap.get("/leave_request")!.key)
                  }}
              >
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  ></path>
                </svg>
                <span className="ml-4">Leave Request</span>
              </a>
            </li>
        </ul>
          <div className="px-6 my-6 w-full flex justify-end items-end h-full">
            <Button color="indigo" variant="outlined" className="flex justify-center items-center w-full" >
              Settings <Cog8ToothIcon className="ml-2 w-5 h-5" />
            </Button>
          </div>
      </div>
      </div>
  );
}
export default Sidebar;
