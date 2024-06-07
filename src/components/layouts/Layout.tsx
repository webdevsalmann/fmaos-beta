import React from "react";
import Footer from "./Footer";
import { cn } from "@/lib/utils";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import ConfigController from "./ConfigController";

export default function Layout({ children, className }: {
  children: React.ReactNode,
  className: string
}) {
  return (
    <div className={cn("relative w-full min-h-[calc(100vh_-_40px)] flex", className)}>
      <Sidebar />
      <div className="relative flex w-full flex-1">
        <div className="flex w-fit flex-col flex-1">
          <MainContent className="w-full">
            {children}
          </MainContent>
          <Footer />
        </div>
        <ConfigController />
      </div>
    </div>
  )
}
