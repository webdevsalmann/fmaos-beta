import { downloadFolderMd } from "@/lib/metadata/metadata";
import DownloadZip from "./components/DownloadZip";

export const metadata = {
  title: downloadFolderMd.title,
  description: downloadFolderMd.description,
}

export default function Page() {
  return (
    <>
      <DownloadZip />
    </>
  );
}
