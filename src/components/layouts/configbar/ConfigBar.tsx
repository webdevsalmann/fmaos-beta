import ConfigController from "@/components/layouts/configbar/ConfigController";
import ResetConfigButton from "@/components/layouts/configbar/ResetConfigButton";
import DownloadConfigButton from "@/components/layouts/configbar/DownloadConfigButton";

export default function ConfigBar({ className }: { className?: string; }) {
    return (
        <div className="relative p-4 hidden md:block md:w-96 border-l">
            <div className="relative w-full rounded-md">
                <div className="divide-y">
                    <div className="mb-4 text-lg font-semibold capitalize">
                        Animation Configuraton
                    </div>
                    <ConfigController />
                </div>
            </div>

            <ResetConfigButton />
            <DownloadConfigButton />
        </div >
    )
}
