import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from "./components/navigation";
import Footer from './components/footer';
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'FEARLESS AUTHENTIC WELLNESS',
  description: 'Nurturing Minds, Transforming Lives, One Authentic Step at a Time',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth " lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
