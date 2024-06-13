import React from "react";
import Sidebar from "@/components/layouts/sidebar/Sidebar";
import Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative w-full min-h-screen flex">
            <Sidebar />
            <div className="relative flex flex-col flex-1">
                <Header />
                <div className="flex-1">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}