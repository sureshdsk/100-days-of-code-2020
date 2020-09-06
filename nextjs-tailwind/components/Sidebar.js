import { useState } from 'react'
import Link from 'next/link'
import AccountDropdown from './AccountDropdown'


export default function Sidebar() {
    const [collapseShow, setCollapseShow] = useState("hidden");
    return (
      <>
        <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
          <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
            {/* Toggler */}
            <button
              className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              type="button"
              onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
            >
              <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               </svg>
            </button>
            {/* Brand */}
            <Link
              
              href="/"
            >
              <a 
              className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0">Workcation</a>
            </Link>
           
            <ul className="md:hidden items-center flex flex-wrap list-none">
                <li className="inline-block relative">
                <AccountDropdown />
                </li>
            </ul>
            <div
              className={
                "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                collapseShow
              }
            >
              {/* Collapse header */}
              <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
                <div className="flex flex-wrap">
                  <div className="w-6/12">
                    <Link
                      
                      href="/"
                    >
                      <a className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0">Dashboard</a>
                    </Link>
                  </div>
                  <div className="w-6/12 flex justify-end">
                    <button
                      type="button"
                      className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                      onClick={() => setCollapseShow("hidden")}
                    >
                      <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Form */}
              <form className="mt-6 mb-4 md:hidden">
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                  />
                </div>
              </form>
              {/* Navigation */}
              <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                <li className="items-center">
                  <Link
                    
                    href="/dashboard"
                  >
                    <a 
                    className="text-indigo-500 hover:text-indigo-600 text-xs uppercase py-3 font-bold block"
                    >
                    <svg  className="h-6 w-6 fill-current inline-block opacity-75 mr-2 text-sm" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
Dashboard</a>
                  </Link>
                </li>
  

                <li className="items-center">
                  <Link
                    
                    href="/"
                  >
                    <a className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block">
                    <svg className="h-6 w-6 inline-block text-gray-500 mr-2 text-sm" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    Profile</a>
                  </Link>
                </li>
  
                <li className="items-center">
                  <Link
                    
                    href="/"
                  >
                    <a className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block">
                    <svg className="h-6 w-6 inline-block text-gray-500 mr-2 text-sm"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                         Login</a>
                  </Link>
                </li>
  
              </ul>
              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              {/* Heading */}
              <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                Bookshelf
              </h6>
              {/* Navigation */}
              <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                <li className="inline-flex">
                  <Link
                    href="/"
                  >
                    <a className="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"> 
                        <i className="fas fa-paint-brush mr-2 text-gray-500 text-base"></i> My Books
                    </a>
                  </Link>
                </li>
                <li className="inline-flex">
                  <Link
                    href="/"
                  >
                    <a className="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"> 
                        <i className="fas fa-paint-brush mr-2 text-gray-500 text-base"></i> My Wishlist
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }