import React from "react";
import Footer from "./Footer";
import { cn } from "@/lib/utils";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

export default function Layout({ children, className }: {
  children: React.ReactNode,
  className: string
}) {
  return (
    <div className={cn("relative min-h-[calc(100vh_-_40px)] flex ", className)}>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <MainContent className="flex-1">
          {children}
        </MainContent>
        <Footer />
      </div>
    </div>
  )
}
