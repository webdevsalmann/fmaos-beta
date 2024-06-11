"use client";

import { useFileManagement } from "@/components/providers/FileManagementContext";
import { Button, buttonVariants } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useFmaosConfig } from "@/components/providers/FmaosConfigProvider";
import getCodeFile from "@/components/helpers/getCodeFile";
import { generateJSXFmaosConfig, generateTSXFmaosConfig } from "@/components/helpers/generateFmaosConfig";
import AnimationFiles from "./AnimationFiles";
import ConfigFile from "./ConfigFile";
import JSZip from "jszip";
import { saveAs } from "file-saver";

interface FileContent {
  name: string;
  content: string;
}

const createZipFile = async (files: FileContent[], zipFileName: string) => {
  const zip = new JSZip();

  // Add files to the zip
  files.forEach((file) => {
    zip.file(file.name, file.content);
  });

  // Generate the zip file
  const content = await zip.generateAsync({ type: "blob" });

  // Save the zip file
  saveAs(content, zipFileName);
};

export default function DownloadZip() {
  const { downloadableFiles, selectedConfigFile } = useFileManagement();
  const { fmaosConfig, toggles } = useFmaosConfig();

  const handleDownloadZip = async () => {
    const files = [];
    for (const filePath of downloadableFiles) {
      const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
      const fileContent = await getCodeFile(filePath);
      files.push({ name: fileName, content: fileContent });
    }

    if (selectedConfigFile) {
      const configContent = selectedConfigFile === "FmaosConfigProvider.jsx"
        ? generateJSXFmaosConfig(fmaosConfig, toggles)
        : generateTSXFmaosConfig(fmaosConfig, toggles);
      files.push({ name: selectedConfigFile, content: configContent });
    }

    createZipFile(files, "fmaos-animations.zip");
  };

  return (
    <>
      {downloadableFiles.length > 0 ? (
        <>
          {/* Heading */}
          <section>
            <h1>Download as a zip folder</h1>
          </section>

          {/* Animation Files */}
          <AnimationFiles />

          {/* Config Files */}
          <ConfigFile />

          {/* Download Button */}
          {selectedConfigFile && (
            <div className="mt-sm">
              <Button onClick={handleDownloadZip}>
                <Download className="mr-2 size-4 stroke-2" />
                Download Zip
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="p-base bg-muted rounded-md flex-center text-center flex-col">
          <h2>No Animation Files Selected</h2>
          <Link className={cn(buttonVariants(), "no-underline")} href="/fade">
            Browse File
          </Link>
        </div>
      )}

    </>
  );
}
