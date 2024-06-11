import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RefreshCcw } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function ReloadButton({ className, onClick }: { className?: string, onClick: () => void }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className={cn("absolute top-sm right-sm size-6 sm:size-8", className)}
          variant="outline"
          size="icon"
          onClick={onClick}>
          <span className='sr-only'>Reload</span>
          <RefreshCcw className="size-3 sm:size-4 pointer-events-none" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className='my-0'>Reload</p>
      </TooltipContent>
    </Tooltip>
  )
}
