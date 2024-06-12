import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Providers from "@/components/providers/Providers";
import { siteMd } from "@/lib/metadata/metadata";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteMd.baseUrl),
  title: {
    default: siteMd.title,
    template: `%s - ${siteMd.name}`
  },
  description: siteMd.description,
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
