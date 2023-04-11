import React, { useState, ReactNode, useEffect } from 'react';
import Sidebar from "@/lib/common/components/sidebar";
import CustomNavbar from "@/lib/common/components/navbar";

const Layout = ({ children }: any) => {

  return (
    <div className={'w-screen overflow-y-auto bg-slate-50 dark:bg-slate-900'}>
        {/*<CustomNavbar/>*/}
        <div className="flex h-full w-full">
            <Sidebar/>
            <div className={'grow w-full overflow-x-hidden transition-all duration-300 flex flex-col ml-14 mt-10'}>{children}</div>
        </div>
    </div>
  );
};

export default Layout;
