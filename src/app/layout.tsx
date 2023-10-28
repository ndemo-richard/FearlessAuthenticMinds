import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from "./components/navigation";
import Footer from './components/footer';
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'FEARLESS AUTHENTIC WELLNESS CONSULTANCY',
  description: 'We help you become fearless authentic; to be yourself and live a life that not only looks good on the outside but also feels good on the inside.',
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
