"use client"

import React, { useEffect } from 'react'
import NavBar from './(components)/Navabar'
import SideBar from './(components)/Sidebar'
import StoreProvider, { useAppSelector } from './redux'


const DashboardLayout = ({children}: {children: React.ReactNode}) => {

  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("remove");
    }
  })
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        {/* sidebar */}
        <SideBar />
        <main className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50 ${
          isSidebarCollapsed ? "" : "md:pl-64" 
          }`}>
            {/* navbar */}
            <NavBar />
            {children}
        </main>
    </div>
  )
}

const DashboardWapper = ({children}: {children: React.ReactNode}) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
}

export default DashboardWapper 