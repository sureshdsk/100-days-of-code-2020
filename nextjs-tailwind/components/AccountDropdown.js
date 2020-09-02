import React, { useState, useEffect } from 'react';


export default function AccountDropdown() {

    const [isOpen, toggleDropdown] = useState(false);

    return (
      <>
          <div className="relative hidden sm:block sm:ml-6">
            <button onClick={e => toggleDropdown(!isOpen)} className="relative  block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                <img className="h-full w-full object-cover" 
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="Your avatar" />
            </button>
            { isOpen ? <button onClick={e => toggleDropdown(!isOpen)} tabindex="-1" className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default z-20"></button>: '' }
            { isOpen ? <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Account settings</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Support</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Sign out</a>
            </div>: ''}
        </div>
      </>
    )
  } 
  