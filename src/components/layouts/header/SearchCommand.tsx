"use client"

import * as React from "react"
import Link from "next/link"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,

} from "@/components/ui/command"
import navigationDatas from "@/lib/consts/WebsiteDatas"

export default function SearchCommand() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <div className="hidden sm:flex h-full w-fit px-2 text-sm flex-center gap-sm text-muted-foreground border rounded" onClick={() => setOpen(!open)}>
        Search Here {" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type animation or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {navigationDatas.map(item => (
            <div key={"Command" + item.id}>
              <CommandGroup heading={item.category}>
                {item.subCategories.map(item => (
                  <Link href={item.href} key={"Command" + item.id} onClick={() => setOpen(false)}>
                    <CommandItem>
                      {item.title}
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </div>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
