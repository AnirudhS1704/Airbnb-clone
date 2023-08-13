import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const email = window.localStorage.getItem('email');
  console.log(email);
  var condition = email? true: false;
  console.log(condition);
  
    return(
        <header className="flex items-center justify-between px-4"> 
        <Link to={"/"} className='flex items-center gap-1 py-4 text-pink-500' >
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
  <span className="font-bold text-xl">Aircnc</span>
        </Link>
  
        <div className="flex gap-3 border-2 rounded-3xl py-2 px-4 shadow-lg">
          <div className="font-semibold text-gray-700">Anywhere</div>
          <div className="text-slate-300">|</div>
          <div className="font-semibold text-gray-700">Any week</div>
          <div className="text-slate-300">|</div>
          <div className="text-gray-500">Any guests</div>
          <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-pink-500 text-white rounded-full p-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
          </button>
        </div>
        <Link to={condition? "/account":"/login"} className="flex gap-3 border rounded-3xl py-2 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500">
    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
  </svg>
  {window.localStorage.getItem('name') && (
    <div>
      {window.localStorage.getItem('name')}
    </div>
  )}
  
        </Link>
        </header>
    )
}