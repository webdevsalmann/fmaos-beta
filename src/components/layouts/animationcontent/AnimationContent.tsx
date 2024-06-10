
export default function AnimationContent({ children }: {
  children: React.ReactNode,
}) {
  return (
    <main className="p-base w-full">
      <article className="prose w-full max-w-full prose-slate dark:prose-invert prose-pre:my-0 overflow-hidden">
        {children}
      </article>
    </main>
  )
}
