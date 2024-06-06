import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton";
import SearchCommand from "@/components/layouts/SearchCommand";

export default function Header() {
  return (
    <header className="relative py-4 px-base h-16 flex items-center border-b overflow-hidden">
      <div className="size-full flex gap-base flex-between">
        Header
        <SearchCommand />
        <ThemeToggleButton />
      </div>
    </header>
  )
}
