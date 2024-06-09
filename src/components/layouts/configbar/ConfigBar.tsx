import { cn } from "@/lib/utils";
import ConfigController from "@/components/layouts/configbar/ConfigController";
import DownloadConfigButton from "@/components/layouts/configbar/DownloadConfigButton";

export default function ConfigBar({ className }: { className?: string; }) {
    return (
        <div className={cn("relative hidden p-4 border-l", "md:block md:w-1/3", className)}>
            <div className="relative w-full rounded-md">
                <div className="divide-y">
                    <div className="mb-4 text-lg font-semibold capitalize">
                        Animation Controller
                    </div>
                    <ConfigController />
                </div>
            </div>

            <DownloadConfigButton />
        </div>
    )
}
