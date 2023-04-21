import React from "react";
import Avatar from "@/lib/common/components/avatar";

const ApplicantsInfo = ({profile}: any) => {
    return (
        <div className="flex items-center w-full justify-center">
            <div className="w-full pl-6">
                <div className="bg-white shadow-xl rounded-lg py-3">
                    <div className="w-full flex items-center justify-center">
                        <Avatar size="md" imgUrl={profile?.avatar} altText={profile?.first_name} roundedFull />
                    </div>
                    <div className="p-2">
                        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{profile?.first_name + " " + profile?.last_name}</h3>
                        <div className="text-center text-gray-400 text-xs font-bold">
                            <p>{profile?.job_title}</p>
                        </div>
                        <table className="text-xs my-3">
                            <tbody>
                            <tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                <td className="px-2 py-2">{profile?.email}</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                <td className="px-2 py-2">{profile?.address}</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                <td className="px-2 py-2">{profile?.phone}</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">Date of Joining</td>
                                <td className="px-2 py-2">{profile?.date_of_joining}</td>
                            </tr>
                            </tbody>
                        </table>

                        <div className="text-center mt-5">
                            <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                               href="#">View Profile</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicantsInfo;