"use client"
import { Download } from "lucide-react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useFmaosConfig } from '@/components/providers/FmaosConfigProvider';
import { Button, buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { generateJSXFmaosConfig, generateTSXFmaosConfig } from "@/components/helpers/generateFmaosConfig";
import { cn, handleDownloadFile } from "@/lib/utils";

export default function DownloadConfigButton() {
    const { fmaosConfig, toggles } = useFmaosConfig();

    const jsxContent = generateJSXFmaosConfig(fmaosConfig, toggles);
    const tsxContent = generateTSXFmaosConfig(fmaosConfig, toggles);
    return (
        <div className="my-2 sticky top-base">
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
                                onClick={() => handleDownloadFile({
                                    file: { name: "FmaosConfigProvider.jsx", content: jsxContent }
                                })}
                            >
                                Download JSX
                            </Button>
                            <Button
                                className="mt-base"
                                variant="secondary"
                                onClick={() => handleDownloadFile({
                                    file: { name: "FmaosConfigProvider.tsx", content: tsxContent }
                                })}
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
