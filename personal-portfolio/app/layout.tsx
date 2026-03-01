import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Personal Portfolio',
  description: 'A showcase of my projects and skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className = "bg-gray-900 text-white">{children}</body>
    </html>
  )
}