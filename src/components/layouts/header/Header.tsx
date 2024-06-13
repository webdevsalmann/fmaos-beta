import { ThemeToggleButton } from "@/components/layouts/header/ThemeToggleButton";
import SearchCommand from "@/components/layouts/header/SearchCommand";
import DownloadFolderButton from "@/components/layouts/header/DownloadFolderButton";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative py-4 px-base h-16 flex items-center border-b overflow-hidden">
      <div className="size-full flex gap-base flex-between">
        <Link className="font-bold text-lg" href="/introduction">FMAOS</Link>

        <SearchCommand />

        <div className="flex gap-sm">
          <DownloadFolderButton />
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  )
}
