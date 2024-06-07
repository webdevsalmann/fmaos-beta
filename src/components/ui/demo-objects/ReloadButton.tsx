import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RefreshCcw } from "lucide-react";

export default function ReloadButton({ className, onClick }: { className?: string, onClick: () => void }) {
  return (
    <Button className={cn("absolute top-sm right-sm size-6 sm:size-8", className)} variant="outline" size="icon" onClick={onClick}>
      <RefreshCcw className="size-3 sm:size-4 pointer-events-none" />
    </Button>
  )
}
