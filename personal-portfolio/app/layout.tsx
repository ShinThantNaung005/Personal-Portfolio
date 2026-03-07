import React from 'react';
import './globals.css';
import NavBar from './navBar';

export const metadata = {
  title: "Shin Thant Naung | Web Developer",
  description: "Portfolio of Shin Thant Naung, React and Next.js developer",
  keywords: ["Web Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Shin Thant Naung" }],
  openGraph: {
    title: "Shin Thant Naung | Web Developer",
    description: "Portfolio of Shin Thant Naung, React and Next.js developer",
    url: "https://ShinThantNaung.vercel.app",
    siteName: "ShinThantNaung Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white transition-colors duration-500">
        <div className="fixed inset-0 
            bg-[radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.4),transparent_60%)] 
            blur-3xl opacity-70 
            pointer-events-none z-0" />
          <div className="relative z-10">
            <NavBar />
            {children}
          </div>
        </body>
    </html>
  )
}