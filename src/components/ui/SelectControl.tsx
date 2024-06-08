import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ToggleControlButton from './ToggleControlButton';

interface InputControlProps {
    label: string;
    name: string;
    value: any;
    onChange: (name: string, value: string) => void;
    include: boolean;
    setInclude: (include: boolean) => void;
    type?: 'input' | 'select';
    selectOptions?: { value: string, label: string }[];
}

const SelectControl: React.FC<InputControlProps> = ({
    label,
    name,
    value,
    onChange,
    include,
    setInclude,
    selectOptions = []
}) => {
    return (
        <div className="mt-2 p-2 bg-muted dark:bg-muted/50 rounded-sm">
            <div className="flex-between">
                <Label htmlFor={name}>{label}</Label>
                <ToggleControlButton active={include} onClick={() => setInclude(!include)} />
            </div>

            {include && (
                <div className="mt-2">
                    <Select value={value} onValueChange={(val) => onChange(name, val)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            {selectOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            )}
        </div>
    );
};

export default SelectControl;