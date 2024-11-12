import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryClientProvider } from './utils/ReactQueryClientProvider';
import Navbar from './components/molecules/Navbar';
import { AuthProvider } from './utils/AuthContext';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Asset Finance Specialists',
  description: 'Specialized in providing financing solutions for businesses in the asset finance industry',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />

          {children}
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
