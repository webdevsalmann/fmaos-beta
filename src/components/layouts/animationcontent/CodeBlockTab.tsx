import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyToClipboardButton from "@/components/layouts/animationcontent/action-buttons/CopyToClipboardButton";
import getCodeFile from "@/components/helpers/getCodeFile";
import DownloadFileButton from "@/components/layouts/animationcontent/action-buttons/DownloadFileButton";
import AddFileButton from "@/components/layouts/animationcontent/action-buttons/AddFileButton";
import DemoContainer from "./DemoContainer";

export default async function CodeBlockTab({ className, blockId, preview, jsxFilePath, tsxFilePath, animationElement }: {
    className?: string;
    blockId: string;
    preview?: ReactNode;
    jsxFilePath: any;
    tsxFilePath: any;
    animationElement: any;
}) {
    const jsxFile: string = await getCodeFile(jsxFilePath)
    const tsxFile: string = await getCodeFile(tsxFilePath)
    return (
        <Tabs defaultValue={`preview-${blockId}`}>
            {/* Trigger Buttons */}
            <TabsList>
                <TabsTrigger value={`preview-${blockId}`}>Preview</TabsTrigger>
                <TabsTrigger value={`jsx-${blockId}`}>.jsx</TabsTrigger>
                <TabsTrigger value={`tsx-${blockId}`}>.tsx</TabsTrigger>
            </TabsList>

            {/* Preview Tab */}
            <TabsContent value={`preview-${blockId}`}>
                <DemoContainer
                    className={className}
                    animationElement={animationElement}
                />
            </TabsContent>

            {/* jsx Code Tab */}
            <TabsContent value={`jsx-${blockId}`}>
                <div className="absolute top-sm right-sm flex flex-wrap gap-2 z-50">
                    <CopyToClipboardButton text={jsxFile} />
                    <DownloadFileButton filePath={jsxFilePath} />
                    <AddFileButton filePath={jsxFilePath} />
                </div>
                <SyntaxHighlighter language="javascript" style={nightOwl} wrapLongLines>
                    {jsxFile}
                </SyntaxHighlighter>
            </TabsContent>

            {/* tsx Code Tab */}
            <TabsContent value={`tsx-${blockId}`}>
                <div className="absolute top-sm right-sm flex flex-wrap gap-2 z-50">
                    <CopyToClipboardButton text={tsxFile} />
                    <DownloadFileButton filePath={tsxFilePath} />
                    <AddFileButton filePath={tsxFilePath} />
                </div>
                <SyntaxHighlighter language="typescript" style={nightOwl} wrapLongLines>
                    {tsxFile}
                </SyntaxHighlighter>
            </TabsContent>
        </Tabs>
    );
}
