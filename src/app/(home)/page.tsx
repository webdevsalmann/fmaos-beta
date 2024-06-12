import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <section className="relative size-full min-h-screen flex-center text-center">
      <div className="relative w-full h-fit z-10">
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
