import navigationDatas from "@/lib/consts/navigationDatas"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import SidebarWrapper from "./SidebarWrapper"

export default function Sidebar({ className }: {
  className?: string
}) {
  return (
    <SidebarWrapper className={className}>
      <div className="sticky top-0">
        <ScrollArea className="h-[calc(100vh_-_40px)]">
          {navigationDatas.map(item => (
            <nav className="mt-base space-y-2xs last-of-type:mb-base" key={"Sidebar" + item.id}>
              <Link className="text-lg font-semibold" href={item.href}>{item.category}</Link>
              <ul className="space-y-2xs">
                {item.subCategories.map(item => (
                  <li key={"Sidebar" + item.id}>
                    <Link className="text-muted-foreground text-sm hover:text-primary" href={item.href}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="absolute inset-0 bottom-auto w-full h-base bg-gradient-to-b from-background to-transparent pointer-events-none" />
          <div className="absolute inset-0 top-auto w-full h-base bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </ScrollArea>
      </div>
    </SidebarWrapper >
  )
}
