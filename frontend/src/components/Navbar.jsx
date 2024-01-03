import React, {useContext}from 'react'
import { observable } from "@legendapp/state"
import { observer, useObservable, Show, Memo } from "@legendapp/state/react";
import { Link } from 'react-router-dom'
import { useMyContext } from './Context';
import { CountContext } from './CountContext';
import { Context } from '../context';
import { useLogoutMutation } from '../redux/api';
const Navbar = observer(function Navbar() {
      
    const [logout, { isLoading }] = useLogoutMutation();
    const {states} = useContext(Context)
    const state = observable({
        tokenGoogle: '', 
    })
    console.log(states.bool.get(), 'stae')
    console.log(states.token.get(), 'st')
    const tk = states.token.get() 
    const handleLogout = async () => {
        try {
          await logout(tk);
          states.token.set('')
           states.bool.set(false)
    } catch (error) {
        console.error('Logout failed:', error);
      }
    }
    // if(isRedirect) {
    //     return <Navigate to='/'/>
    // }
   

    // const handleLogout = async () => {
    //   try {
    //     await logout(token);
    //     // The user is logged out, you can also clear the token from your Redux store
    //     removeTokenFromLocalStorage();
    //     removeTokenFromLocalStorageq();
    //     console.log('Logout successful');
    //     localStorage.setItem('isLoggedOut', 'true');
    //     window.location.reload();
    //   } catch (error) {
    //     console.error('Logout failed:', error);
    //   }
    // }
  
 
  return (
    <div>
                <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
   
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                HISHAM
            </span>
             
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Show
                if={states.bool}
                else={() =>  <button className='ml-4'><Link to='/login'>Login</Link></button>}>
                {() => <button onClick={handleLogout}>Logout</button>}
            </Show>
           
           
            <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                />
                </svg>
            </button>
            </div>
            <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
            >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <a
                    href="#"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                >
                    Home
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                    About
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                    Services
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                    Contact
                </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>

    </div>
  )
})

export default Navbar