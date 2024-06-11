"use client"
import { Toaster } from "@/components/ui/toaster"
import ThemeProvider from "@/components/providers/ThemeProvider"
import { FmaosConfigProvider } from "@/components/providers/FmaosConfigProvider"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import { FileManagementProvider } from "./FileManagementContext"

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <FmaosConfigProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <FileManagementProvider>
                    <TooltipProvider>
                        {children}
                        <Toaster />
                    </TooltipProvider>
                </FileManagementProvider>
            </ThemeProvider>
        </FmaosConfigProvider>
    )
}