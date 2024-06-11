"use client"
import { useFileManagement } from "@/components/providers/FileManagementContext"
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ConfigFile() {
    const { selectedConfigFile, setSelectedConfigFile } = useFileManagement();

    return (
        <section className="mt-sm">
            <h2>{selectedConfigFile ?
                <span>Selected config file</span>
                :
                <span className="text-yellow-500">Select config file!</span>
            }</h2>

            <div className="mt-2 flex flex-col md:flex-row gap-base">
                <div
                    className={cn(
                        buttonVariants({ variant: selectedConfigFile === "FmaosConfigProvider.tsx" ? "secondary" : "outline" }),
                        "w-fit cursor-pointer",
                        selectedConfigFile === "FmaosConfigProvider.tsx" && "text-yellow-600 dark:text-yellow-400"
                    )}
                    onClick={() => setSelectedConfigFile("FmaosConfigProvider.tsx")}
                >
                    FmaosConfigProvider.tsx
                </div>
                <div
                    className={cn(
                        buttonVariants({ variant: selectedConfigFile === "FmaosConfigProvider.jsx" ? "secondary" : "outline" }),
                        "w-fit cursor-pointer",
                        selectedConfigFile === "FmaosConfigProvider.jsx" && "text-blue-600 dark:text-blue-400"
                    )}
                    onClick={() => setSelectedConfigFile("FmaosConfigProvider.jsx")}
                >
                    FmaosConfigProvider.jsx
                </div>
            </div>
        </section>
    )
}
