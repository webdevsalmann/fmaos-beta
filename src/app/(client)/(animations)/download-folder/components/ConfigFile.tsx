"use client"

import { useFileManagement } from "@/components/providers/FileManagementContext"
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ConfigFile() {
    const { selectedConfigFile, setSelectedConfigFile } = useFileManagement();

    const JSXSelected = selectedConfigFile === "FmaosConfigProvider.jsx"
    const TSXSelected = selectedConfigFile === "FmaosConfigProvider.tsx"
    return (
        <section className="mt-sm">
            <h2>{selectedConfigFile ?
                <span>Selected config file</span>
                :
                <span className="text-yellow-500">Select config file!</span>
            }</h2>

            <div className="mt-2 flex flex-col md:flex-row gap-base">
                <div className={cn(
                    buttonVariants({ variant: JSXSelected ? "secondary" : "outline" }),
                    "w-fit cursor-pointer",
                    JSXSelected && "text-yellow-600 dark:text-yellow-400")}
                    onClick={() => setSelectedConfigFile("FmaosConfigProvider.jsx")}
                    tabIndex={0}
                    >FmaosConfigProvider.jsx</div>
                <div className={cn(
                    buttonVariants({ variant: TSXSelected ? "secondary" : "outline" }),
                    "w-fit cursor-pointer",
                    TSXSelected && "text-blue-600 dark:text-blue-400")}
                    onClick={() => setSelectedConfigFile("FmaosConfigProvider.tsx")}
                    tabIndex={0}
                >FmaosConfigProvider.tsx</div>
            </div>
        </section>
    )
}
