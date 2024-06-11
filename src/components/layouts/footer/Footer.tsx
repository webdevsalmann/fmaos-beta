import { SquareArrowOutUpRight, SquareArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const year: any = date.getFullYear();
  return (
    <footer className="p-base border-t">
      <div className="grid md:grid-cols-4 gap-base">
        <div className="md:col-span-3 text-muted-foreground text-xs">
          <div>
            Copyright &copy; {year} FMAOS - Framer Motion Animation On Screen
          </div>
          <div className="mt-1">
            <Link className="hover:text-foreground" href="/privacy-policy">Privacy-Policy</Link> / <Link className="hover:text-foreground" href="credits">Credits</Link> / developed by <Link className="hover:text-foreground" href="https://www.webdevsalmann.com" target="_blank">webdevsalmann</Link> 💖
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="text-muted-foreground hover:text-foreground flex items-center gap-2">
            <span className="size-5 aspect-square">
              <Image
                className="size-full"
                src="/images/icon/github-mark.svg"
                width={16}
                height={16}
                alt="github-icon"
              />
            </span>
            <Link href="https://github.com/webdevsalmann/fmaos" target="_blank">
              Github
            </Link>
            <SquareArrowOutUpRight className="inline size-4 stroke-2" />
          </div>
        </div>
      </div>
    </footer>
  )
}
