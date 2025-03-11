import React from 'react'
import NavBar from './(components)/Navabar'
import SideBar from './(components)/Sidebar'


const DashboardWapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        {/* sidebar */}
        <SideBar />
        <main className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50 md:pl-64`}>
            {/* navbar */}
            <NavBar />
            {children}
        </main>
    </div>
  )
}

export default DashboardWapper 