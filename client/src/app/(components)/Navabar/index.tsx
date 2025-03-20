import React, { useEffect } from 'react';
import { Menu, Moon, Search, Settings, Sun } from 'lucide-react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '@/state';

const NavBar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      dispatch(setIsDarkMode(true));
    } else if (storedTheme === 'light') {
      dispatch(setIsDarkMode(false));
    }
  }, [dispatch]);

  return (
    <div className='flex items-center justify-between bg-white px-4 py-3 dark:bg-black'>
      {/* Search bar */}
      <div className='flex items-center gap-8'>
        {!isSidebarCollapsed ? null : (
          <button onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}>
            <Menu className='h-8 w-8 dark:text-white' />
          </button>
        )}

        <div className='relative flex h-min w-[200px]'>
          <Search className='absolute left-[4px] top-1/2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white'/>
          <input
            className='w-full rounded bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white'
            type='search'
            placeholder='Search...'
          />
        </div>
      </div>

      {/* Icons */}
      <div className='flex items-center'>
        <button
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          className={`rounded p-2 ${isDarkMode ? 'dark:hover:bg-gray-700' : 'hover:bg-gray-100'}`}
        >
          {isDarkMode ? (
            <Sun className='h-6 w-6 cursor-pointer dark:text-white' />
          ) : (
            <Moon className='h-6 w-6 cursor-pointer dark:text-white' />
          )}
        </button>
        <Link
          href='/settings'
          className={`h-min w-min rounded p-2 ${isDarkMode ? 'dark:hover:bg-gray-700' : 'hover:bg-gray-100'}`}
        >
          <Settings className='h-6 w-6 cursor-pointer dark:text-white'/>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;