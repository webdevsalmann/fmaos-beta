import Link from "next/link"
import SidebarWrapper from "@/components/layouts/sidebar/SidebarWrapper"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import websiteDatas from "@/lib/consts/WebsiteDatas"

export default function Sidebar({ className }: {
  className?: string
}) {
  return (
    <SidebarWrapper className={className}>
      <nav>
        {websiteDatas.map(item => (
          <Accordion className="last-of-type:mb-base" key={"Sidebar" + item.id} type="single" collapsible>
            <AccordionItem className="border-none" value="item-1">
              <AccordionTrigger className="py-3 hover:no-underline text-base">
                <Link className="font-semibold capitalize" href={item.href}>{item.category}</Link>
              </AccordionTrigger>

              <AccordionContent>
                <ul className="space-y-2xs">
                  {item.subCategories.map(item => (
                    <li key={"Sidebar" + item.id}>
                      <Link className="text-muted-foreground text-sm hover:text-primary capitalize" href={item.href}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </nav>
    </SidebarWrapper >
  )
}
