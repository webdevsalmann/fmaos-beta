"use client"
import { RotateCcw } from "lucide-react";
import { useFmaosConfig } from "@/components/providers/FmaosConfigProvider";
import ConfirmationAlertDialog from "@/components/ui/ConfirmationAlertDialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ResetConfigButton() {
  const { resetFmaosConfig } = useFmaosConfig()
  return (
    <div className="w-full border-t">
      <ConfirmationAlertDialog onClick={resetFmaosConfig} description="You want to remove all the changes in configuration?
">
        <div className={cn(buttonVariants({ variant: "ghost" }),
          "my-2 hover:text-destructive dark:hover:text-red-600")}>
          <RotateCcw className="mr-2 size-4 stroke-2" /> Reset
        </div>
      </ConfirmationAlertDialog>
    </div>
  )
}
