import { buttonVariants } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import Tip from "@/components/ui/Tip";
import { cn } from "@/lib/utils";

export default function ReloadButton({ className, onClick }: { className?: string, onClick: () => void }) {
  return (
    <Tip className="absolute top-sm right-sm" toolTip={(<p className='my-0'>Reload</p>)}>
      <div className={cn(buttonVariants({ variant: "outline", size: "icon" }),
        "size-6 sm:size-8", className)}
        onClick={onClick}
        tabIndex={0}>
        <span className='sr-only'>Reload</span>
        <RefreshCcw className="size-3 sm:size-4 pointer-events-none" />
      </div>
    </Tip>
  )
}
