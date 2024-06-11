import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';

interface ToggleControlButtonProps {
    active?: boolean;
    onClick?: () => void;
}

const ToggleControlButton: React.FC<ToggleControlButtonProps> = ({ active, onClick }) => (
    <Button className='h-6 rounded-sm p-1 aspect-square' variant="ghost" size="sm" onClick={onClick}>
        {active ? <X className='size-sm' /> : <Plus className='size-sm' />}
    </Button>
);

export default ToggleControlButton;
