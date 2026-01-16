import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Layout/Header";
import Footer from "@/Components/Layout/Footer";
import { ToastContainer } from "react-toastify";
import AuthProvider from "@/Components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'ProductFlow',
  description: 'ProductFlow is a simple and scalable product management application built with Next.js (App Router) and Express.js, featuring public product listings, detailed product views, and basic authentication with protected routes',
};

export default async function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" flex flex-col min-h-screen">
          <AuthProvider>
            {' '}
            <Header></Header>
          </AuthProvider>

          <div className=" flex-1 ">
            {children}
            <ToastContainer />
          </div>

          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
