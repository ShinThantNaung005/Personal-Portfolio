import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profile from '../public/profile.jpg';
import python from '../public/Python-logo-notext.svg';
import react from '../public/React-icon.svg';
import typescript from '../public/typescript-logo.svg';
import javascript from '../public/javascript-logo.svg';
export default function page(){
  return (
    <div className='flex flex-col justify-between'>

      <main className="flex items-left p-4 mt-10">
        <div className = "relative w-80 h-80 rounded-full ml-4 flex-shrink-0 mt-8 overflow-hidden" aria-hidden="true">
          <Image src={profile} alt="Profile" className="object-cover" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className="ml-4 mt-8 flex flex-col space-y-4">
          <p className="text-3xl">Hi! I am</p>
          <p className="text-3xl font-bold">Shin Thant Naung</p>
          <p className = "text-lg text-white-600">A passionate software developer</p>
          <p className = "text-lg text-white-600"> with great interest in building web applications and in learning new technologies.</p>
          <p className = "text-lg text-white-600">My Techstack:</p>
          <div className="flex flex-wrap gap-3 space-y-4 ml-4">
            <div className="flex items-center gap-2 bg-gray-700 dark:bg-gray-300 p-2 rounded h-10">
              <Image src={python} alt="Python logo" className="w-6 h-6" width={24} height={24} />
              <span className="dark:text-gray-900">Python</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-700 dark:bg-gray-300 p-2 rounded h-10">
              <Image src={react} alt="React logo" className="w-6 h-6" width={24} height={24} />
              <span className="dark:text-gray-900">React</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-700 dark:bg-gray-300 p-2 rounded h-10">
              <Image src={typescript} alt="Typescript logo" className="w-6 h-6" width={24} height={24} />
              <Image src={javascript} alt="Javascript logo" className="w-6 h-6" width={24} height={24} />
              <span className="dark:text-gray-900">Javascript / Typescript</span>
            </div>
          </div>
          <Link href="/contact">
            <button className="w-70 ml-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Hire Me</button>
          </Link>
          <div className="flex items-center gap-10 ml-17 mt-4">
            <a href="https://www.facebook.com/shin.thant.517084" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 hover:text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.596 0 0 .593 0 1.326v21.348C0 23.406.596 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.406 24 22.674V1.326C24 .593 23.404 0 22.675 0z"/>
              </svg>
            </a>
            <a href="https://github.com/ShinThantNaung" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.088-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.296-1.23 3.296-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.623-5.476 5.921.43.372.815 1.102.815 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:shinthantnaung112@gmail.com" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 hover:text-red-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l11.985-9.713H.015L12 12.713zm0 2.574L.015 5.29v13.42h23.97V5.29L12 15.287z"/>
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  ) 
}     