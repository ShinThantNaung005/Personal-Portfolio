"use client";
import React, { useState, useEffect } from 'react';
import './globals.css';
import Link from 'next/link';
import { usePathname } from "next/navigation"
import Image from 'next/image';
import light from '../public/day-mode.png';
import dark from '../public/night-mode.png';

export default function NavBar() {
    type Theme = 'light' | 'dark';
    type Img = typeof light | typeof dark;
    const [theme, setTheme] = useState<Theme>('dark');
    const [img,setImg] = useState<Img>(dark);
    const toggleTheme = () => {
        const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
        const newImg: Img = newTheme === 'light' ? light : dark;
        setTheme(newTheme);
        setImg(newImg);
        changeTheme(newTheme);
    };
    const changeTheme = (newTheme: Theme) : void => {
        const Body = document.querySelector('body');
        const nav = document.querySelector('header');
        const button = document.querySelector('button');
        const label = document.querySelectorAll('label');
        
        if (Body) {
            Body.style.backgroundColor = newTheme === 'light' ? '#f3f4f6' : '#111827';
            Body.style.color = newTheme === 'light' ? '#111827' : '#ffffff';
            Body.classList.toggle('dark', newTheme === 'dark');
        }
        
        if (nav) {
            nav.style.backgroundColor = newTheme === 'light' ? '#e5e7eb' : '#1f2937';
            nav.style.color = newTheme === 'light' ? '#111827' : '#ffffff';
        }
        
        if (button) {
            button.style.backgroundColor = newTheme === 'light' ? '#d1d5db' : '#6b7280';
        }

        if(label){
            label.forEach((el) => {
                (el as HTMLElement).style.color = newTheme === 'light' ? '#111827' : '#ffffff';
            });
        }
    }
    const pathname = usePathname();

    useEffect(() => {
        changeTheme(theme);
    }, []);

    return(
        <header className = "flex flex-col items-top p-4 bg-gray-800 text-white ml-4 mr-4 mt-4 rounded-xl border-2 border-gray-700">
            <div className = "flex items-center justify-between">
                <div className = "flex items-center gap-8">
                    <Link href="/" className={`hover:text-gray-200 ${pathname === '/' ? 'bg-gray-700 dark:bg-gray-300 px-2 py-1 rounded text-gray-900 dark:text-white' : ''}`}>About Me</Link>
                    <Link href="/experiences" className={`hover:text-gray-200 ${pathname === '/experiences' ? 'bg-gray-700 dark:bg-gray-300 px-2 py-1 rounded text-gray-900 dark:text-white' : ''}`}>Experiences</Link>
                    <Link href="/contact" className={`hover:text-gray-200 ${pathname === '/contact' ? 'bg-gray-700 dark:bg-gray-300 px-2 py-1 rounded text-gray-900 dark:text-white' : ''}`}>Contact Me</Link>
                </div>
                    <button onClick={toggleTheme} className = "w-10 h-10 bg-gray-500 rounded-full">
                        <Image src={img} alt="Dark mode" className="object-cover" />
                    </button>
                </div>
      </header>
    )
}
