"use client"
import React from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

interface CopyToClipboardButtonProps {
    text: any;
    className?: string;
}

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({ className, text }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast({
                    title: "Code copied to clipboard!",
                })
            })
            .catch((error) => {
                toast({
                    title: "Failed to copy code, Please try again",
                    variant: "destructive"
                })
                console.error('Failed to copy code: ', error);
            });
    };

    return (
        <Button className={cn("size-6 sm:size-8", className)} variant="outline" size='icon' onClick={copyToClipboard}>
            <Copy className='size-3 sm:size-4 pointer-events-none' />
        </Button>
    );
};

export default CopyToClipboardButton;
