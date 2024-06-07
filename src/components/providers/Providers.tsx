"use client"
import { Toaster } from "@/components/ui/toaster"
import ThemeProvider from "@/components/providers/ThemeProvider"
import { FmaosConfigProvider } from "@/components/providers/fmaosConfigProvider"


export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <FmaosConfigProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
                <Toaster />
            </ThemeProvider>
        </FmaosConfigProvider>
    )
}