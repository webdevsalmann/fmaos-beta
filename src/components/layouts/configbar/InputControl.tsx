import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import ToggleControlButton from './ToggleControlButton';

interface InputControlProps {
    label: string;
    name: string;
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    include: boolean;
    setInclude: (include: boolean) => void;
}

const InputControl: React.FC<InputControlProps> = ({
    label,
    name,
    value,
    onChange,
    include,
    setInclude,
}) => {
    return (
        <div className="mt-2 p-2 bg-muted dark:bg-muted/50 rounded-sm">
            <div className="flex-between">
                <Label htmlFor={name}>{label}</Label>
                <ToggleControlButton active={include} onClick={() => setInclude(!include)} />
            </div>

            {include && (
                <div className="mt-2">
                    <Input
                        type="number"
                        name={name}
                        id={name}
                        value={value}
                        onChange={onChange}
                        min={0}
                    />
                </div>
            )}
        </div>
    );
};

export default InputControl;
