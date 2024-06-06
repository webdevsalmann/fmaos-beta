import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from './use-toast';
import { Copy } from 'lucide-react';

interface CopyToClipboardProps {
    text: any;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
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
        <Button className='absolute top-sm right-sm size-6 sm:size-8' variant="outline" size='icon' onClick={copyToClipboard}>
            <Copy className='size-4 pointer-events-none' />
        </Button>
    );
};

export default CopyToClipboard;