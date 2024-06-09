"use client"
import { Download } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useFmaosConfig } from '@/components/providers/FmaosConfigProvider';
import { generateJSXFmaosConfig } from "@/components/helpers/generateJSXFmaosConfig";
import { generateTSXFmaosConfig } from "@/components/helpers/generateTSXFmaosConfig";

export default function DownloadConfigButton() {
    const { fmaosConfig, toggles } = useFmaosConfig();

    const handleDownload = (content: string, fileName: string, fileType: string) => {
        const blob = new Blob([content], { type: fileType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
    };

    const jsxContent = generateJSXFmaosConfig(fmaosConfig, toggles);
    const tsxContent = generateTSXFmaosConfig(fmaosConfig, toggles);

    return (
        <div className="sticky top-base">
            <Dialog>
                <DialogTrigger className={cn(buttonVariants({ variant: "secondary" }), "relative w-full")}>
                    <Download className="mr-2 size-4 stroke-2" />
                    Download Config File
                </DialogTrigger>

                <DialogContent>
                    <DialogTitle>FmaosConfigProvider</DialogTitle>

                    <Tabs defaultValue="jsx" className="w-full">
                        <TabsList>
                            <TabsTrigger value="jsx">.jsx</TabsTrigger>
                            <TabsTrigger value="tsx">.tsx</TabsTrigger>
                        </TabsList>
                        <TabsContent className="w-full h-80 overflow-scroll" value="jsx">
                            <SyntaxHighlighter language="javascript" style={nightOwl} wrapLongLines>
                                {jsxContent}
                            </SyntaxHighlighter>
                        </TabsContent>
                        <TabsContent className="w-full h-80 overflow-scroll" value="tsx">
                            <SyntaxHighlighter language="typescript" style={nightOwl} wrapLongLines>
                                {tsxContent}
                            </SyntaxHighlighter>
                        </TabsContent>

                        <div className="flex gap-base">
                            <Button
                                className="mt-base"
                                variant="secondary"
                                onClick={() => handleDownload(jsxContent, "FmaosConfigProvider.jsx", "text/javascript")}
                            >
                                Download JSX
                            </Button>
                            <Button
                                className="mt-base"
                                variant="secondary"
                                onClick={() => handleDownload(tsxContent, "FmaosConfigProvider.tsx", "text/typescript")}
                            >
                                Download TSX
                            </Button>
                        </div>
                    </Tabs>
                </DialogContent>
            </Dialog>
        </div>
    );
}
