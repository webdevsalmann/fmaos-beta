"use client"
import { Toaster } from "@/components/ui/toaster"
import ThemeProvider from "./ThemeProvider"


export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
            <Toaster />
        </ThemeProvider>
    )
}