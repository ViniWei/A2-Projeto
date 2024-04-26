'use client';
import Dashboard from "@/components/Dashboard/Dashboard"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <>
      <body className={inter.className}>
        <div className="home">
          <Dashboard></Dashboard>
        </div>
      </body>
    </>
  );
}
