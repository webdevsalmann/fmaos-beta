import { cn } from "@/lib/utils"

export default function MainContent({ children, className }: {
  children: React.ReactNode,
  className?: string
}) {
  // w-full min-w-full max-w-full
  return (
    <main className={cn("p-base w-full", className)}>
      <article className="prose w-full max-w-full prose-slate dark:prose-invert prose-pre:my-0 overflow-hidden">
        {children}
      </article>
    </main>
  )
}
