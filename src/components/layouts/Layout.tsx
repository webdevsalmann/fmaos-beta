import React from "react";
import Footer from "./footer/Footer";
import { cn } from "@/lib/utils";
import MainContent from "./maincontent/MainContent";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import ConfigBar from "./configbar/ConfigBar";

export default function Layout({ children, className }: {
  children: React.ReactNode,
  className: string
}) {
  return (
    <div className={cn("relative w-full min-h-[calc(100vh_-_40px)] flex", className)}>
      <Sidebar />
      <div className="relative flex-1">
        <Header />
        <div className="flex w-full">
          <div className="flex w-fit flex-col flex-1">
            <MainContent className="w-full">
              {children}
            </MainContent>
          </div>
          <ConfigBar />
        </div>
        <Footer />
      </div>
    </div>
  )
}
