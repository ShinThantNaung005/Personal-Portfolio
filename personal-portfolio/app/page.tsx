import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profile from '../public/profile.jpg';
export default function page(){
  return (
    <div className='flex flex-col justify-between'>
      <header className = "flex flex-col items-top p-4 bg-gray-800 text-white ml-4 mr-4 mt-4 rounded-xl border-2 border-gray-700">
        <div className = "flex items-center justify-between">
          <div className = "flex items-center gap-8">
            <a href="#about" className="hover:text-gray-300">About Me</a>
            <a href="#experiences" className="hover:text-gray-300">Experiences</a>
            <Link href="/contact" className="hover:text-gray-300">Contact Me</Link>
          </div>
          <div className="w-8 h-8 bg-white rounded-full" aria-hidden="true" />
        </div>
      </header>
      <main className="flex items-left p-4 mt-20">
        <div className = "relative w-80 h-80 rounded-full ml-4 flex-shrink-0 mt-8 overflow-hidden" aria-hidden="true">
          <Image src={profile} alt="Profile" className="object-cover" fill />
        </div>
        <div className="ml-4 mt-8 flex flex-col space-y-4">
          <p className="text-3xl">Hi! I am</p>
          <p className="text-3xl font-bold">Shin Thant Naung</p>
          <p className = "text-lg text-white-600">A passionate software developer</p>
          <p className = "text-lg text-white-600"> with great interest in building web applications and in learning new technologies.</p>
          <Link href="/contact">
            <button className="w-50 ml-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Hire Me</button>
          </Link>
        </div>
      </main>
    </div>
  ) 
}     