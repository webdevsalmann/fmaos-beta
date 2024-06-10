import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton";
import SearchCommand from "@/components/layouts/header/SearchCommand";

export default function Header() {
  return (
    <header className="relative py-4 px-base h-16 flex items-center border-b overflow-hidden">
      <div className="size-full flex gap-base flex-between">
        <div className="font-bold text-lg">FMAOS</div>
        <SearchCommand />
        <ThemeToggleButton />
      </div>
    </header>
  )
}
