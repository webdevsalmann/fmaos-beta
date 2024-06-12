import SidebarWrapper from "@/components/layouts/sidebar/SidebarWrapper"
import Link from "next/link"
import websiteDatas from "@/lib/consts/WebsiteDatas"

export default function Sidebar({ className }: {
  className?: string
}) {
  return (
    <SidebarWrapper className={className}>
      {websiteDatas.map(item => (
        <nav className="mt-base space-y-2xs last-of-type:mb-base" key={"Sidebar" + item.id}>
          <Link className="text-lg font-semibold capitalize" href={item.href}>{item.category}</Link>
          <ul className="space-y-2xs">
            {item.subCategories.map(item => (
              <li key={"Sidebar" + item.id}>
                <Link className="text-muted-foreground text-sm hover:text-primary capitalize" href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </SidebarWrapper >
  )
}
