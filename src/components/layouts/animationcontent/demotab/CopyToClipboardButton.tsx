"use client"
import React from 'react';
import { Copy } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn, copyToClipboard } from '@/lib/utils';
import Tip from '@/components/ui/Tip';

interface CopyToClipboardButtonProps {
    text: any;
    className?: string;
}

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({ className, text }) => {
    return (
        <Tip toolTip={(<p className='my-0'>Copy to clipboard</p>)}>
            <div className={cn(buttonVariants({ variant: "outline", size: "icon" }),
                    "size-6 sm:size-8", className)}
                onClick={() => copyToClipboard(text)}>
                <span className='sr-only'>Copy to clipboard</span>
                <Copy className='size-3 sm:size-4 pointer-events-none' />
            </div>
        </Tip>
    );
};

export default CopyToClipboardButton;
