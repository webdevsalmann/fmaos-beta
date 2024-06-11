"use client"
import React from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn, copyToClipboard } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface CopyToClipboardButtonProps {
    text: any;
    className?: string;
}

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({ className, text }) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    className={cn("size-6 sm:size-8", className)}
                    variant="outline"
                    size='icon'
                    onClick={() => copyToClipboard(text)}>
                    <span className='sr-only'>Copy to clipboard</span>
                    <Copy className='size-3 sm:size-4 pointer-events-none' />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p className='my-0'>Copy to clipboard</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default CopyToClipboardButton;
