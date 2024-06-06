"use client"
import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CopyToClipboard from "./CopyToClipboard";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeBlockTab({ blockId, preview, jsx, tsx }: {
    blockId: string, preview: ReactNode, jsx: any, tsx: any
}) {
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
                <CopyToClipboard text={jsx} />
                <SyntaxHighlighter language="javascript" style={nightOwl} wrapLongLines>
                    {jsx}
                </SyntaxHighlighter>
            </TabsContent>

            <TabsContent value={`tsx-${blockId}`}>
                <CopyToClipboard text={tsx} />
                <SyntaxHighlighter language="typescript" style={nightOwl} wrapLongLines>
                    {tsx}
                </SyntaxHighlighter>
            </TabsContent>
        </Tabs>
    );
}
