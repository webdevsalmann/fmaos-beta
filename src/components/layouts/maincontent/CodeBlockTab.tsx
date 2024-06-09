import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyToClipboardButton from "@/components/ui/demo-objects/CopyToClipboardButton";
import getCodeFile from "@/components/helpers/getCodeFile";
import DownloadFileButton from "@/components/ui/demo-objects/DownloadFileButton";

export default async function CodeBlockTab({ blockId, preview, jsxFilePath, tsxFilePath }: {
    blockId: string, preview: ReactNode, jsxFilePath: any, tsxFilePath: any
}) {
    const jsxFile : string = await getCodeFile(jsxFilePath)
    const tsxFile : string = await getCodeFile(tsxFilePath)
    return (
        <Tabs defaultValue={`preview-${blockId}`}>
            <TabsList>
                <TabsTrigger value={`preview-${blockId}`}>Preview</TabsTrigger>
                <TabsTrigger value={`jsx-${blockId}`}>.jsx</TabsTrigger>
                <TabsTrigger value={`tsx-${blockId}`}>.tsx</TabsTrigger>
            </TabsList>

            <TabsContent value={`preview-${blockId}`}>
                {preview}
            </TabsContent>

            <TabsContent value={`jsx-${blockId}`}>
                <div className="absolute top-sm right-sm flex flex-wrap gap-2">
                    <CopyToClipboardButton text={jsxFile} />
                    <DownloadFileButton filePath={jsxFilePath} />
                </div>
                <SyntaxHighlighter language="javascript" style={nightOwl} wrapLongLines>
                    {jsxFile}
                </SyntaxHighlighter>
            </TabsContent>

            <TabsContent value={`tsx-${blockId}`}>
                <div className="absolute top-sm right-sm flex flex-wrap gap-2">
                    <CopyToClipboardButton text={tsxFile} />
                    <DownloadFileButton filePath={tsxFilePath} />
                </div>
                <SyntaxHighlighter language="typescript" style={nightOwl} wrapLongLines>
                    {tsxFile}
                </SyntaxHighlighter>
            </TabsContent>
        </Tabs>
    );
}
