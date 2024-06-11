import { ThemeToggleButton } from "@/components/layouts/header/ThemeToggleButton";
import SearchCommand from "@/components/layouts/header/SearchCommand";
import DownloadFolderButton from "./DownloadFolderButton";

export default function Header() {
  return (
    <header className="relative py-4 px-base h-16 flex items-center border-b overflow-hidden">
      <div className="size-full flex gap-base flex-between">
        <div className="font-bold text-lg">FMAOS</div>

        <SearchCommand />

        <div className="flex gap-sm">
          <DownloadFolderButton />
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  )
}
