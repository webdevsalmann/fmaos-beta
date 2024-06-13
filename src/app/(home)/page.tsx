import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function page() {
  return (
    <section className="relative mx-auto p-base size-full min-h-screen flex-center text-center apply-prose">
      <div className="relative w-full h-fit dark:prose-invert z-10">
        <h1>Framer Motion Animate On Screen</h1>

        <p className="my-base">
          A Predefined framer motion animation library to simplify your animation workflow and enhance your user interfaces.
        </p>

        <div className="flex-center flex-wrap gap-base">
          <Link className={cn(buttonVariants(), "no-underline")} href="/introduction">Getting Started</Link>
          <Link className={cn(buttonVariants({ variant: "secondary" }), "no-underline")} href="/fade">View animations</Link>
        </div>
      </div>
    </section>
  )
}
