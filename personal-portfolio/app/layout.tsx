import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Fraunces, Space_Grotesk } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './globals.css';
import NavBar from './navBar';
import PortfolioThemeProvider from './themeProvider';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '700'],
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['500', '700'],
});

export const metadata: Metadata = {
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
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${fraunces.variable}`}>
        <AppRouterCacheProvider>
          <PortfolioThemeProvider>
            <NavBar />
            {children}
          </PortfolioThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}