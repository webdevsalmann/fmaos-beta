import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function page() {

  return (
    <section className="flex-center text-center">
      <div className="">
        <h1>Framer Motion Animate On Screen</h1>
        <p className="my-base">A Predefined framer motion animation library</p>
        <div className="flex-center gap-base">
          <Link className={cn(buttonVariants(), "no-underline")} href="/introduction">Getting Started</Link>
          <Link className={cn(buttonVariants({ variant: "secondary" }), "no-underline")} href="/fade">View animations</Link>
        </div>
      </div>
    </section>
  )
}
