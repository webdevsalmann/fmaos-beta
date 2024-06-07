"use client"
import React from 'react';
import { useConfig } from '@/components/providers/fmaosConfigProvider';
import { cn } from '@/lib/utils';
import ControlWrapper from '@/components/ui/controller/ControlWrapper';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from '../ui/scroll-area';


const ConfigController = ({ className }: { className?: string }) => {
    const { fmaosConfig, setFmaosConfig } = useConfig();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFmaosConfig(prevConfig => ({ ...prevConfig, [name]: value }));
    };

    return (
        <div className={cn("relative p-4 border-l", "md:w-1/3", className)}>
            <div className="sticky top-base rounded-md w-full border">
                <ScrollArea className="h-[calc(100vh_-_100px)]">
                    <div className="py-4 divide-y">
                        <ControlWrapper className='grid grid-cols-2 gap-base items-center'>
                            <Label htmlFor='initialOffset'>Initial Offset</Label>
                            <Input
                                type="number"
                                name="initialOffset"
                                id="initialOffset"
                                value={fmaosConfig.initialOffset}
                                onChange={handleInputChange}
                            />
                        </ControlWrapper>

                        <ControlWrapper>
                            <Label htmlFor='transition'>Transition</Label>

                            {/* Type */}
                            <div className="mt-2 grid grid-cols-2 gap-base items-center">
                                <Label htmlFor='type'>Type</Label>
                                <Select name='type' defaultValue='tween'>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="tween">Tween</SelectItem>
                                        <SelectItem value="spring">Spring</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Stiffness */}
                            <div className="mt-2 grid grid-cols-2 gap-base items-center">
                                <Label htmlFor='stiffeness'>Stiffness</Label>
                                <Input
                                    type="number"
                                    name="stiffeness"
                                    id="stiffeness"
                                    value={fmaosConfig.initialOffset}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Damping */}
                            <div className="mt-2 grid grid-cols-2 gap-base items-center">
                                <Label htmlFor='damping'>damping</Label>
                                <Input
                                    type="number"
                                    name="damping"
                                    id="damping"
                                    value={fmaosConfig.initialOffset}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Mass */}
                            <div className="mt-2 grid grid-cols-2 gap-base items-center">
                                <Label htmlFor='mass'>Mass</Label>
                                <Input
                                    type="number"
                                    name="mass"
                                    id="mass"
                                    value={fmaosConfig.initialOffset}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Duration */}
                            <div className="mt-2 grid grid-cols-2 gap-base items-center">
                                <Label htmlFor='duration'>Duration</Label>
                                <Input
                                    type="number"
                                    name="duration"
                                    id="duration"
                                    value={fmaosConfig.initialOffset}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Delay */}
                            <div className="mt-2 grid grid-cols-2 gap-base items-center">
                                <Label htmlFor='delay'>Delay</Label>
                                <Input
                                    type="number"
                                    name="delay"
                                    id="delay"
                                    value={fmaosConfig.initialOffset}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Repeat */}
                            <div className="mt-2 grid grid-cols-2 gap-base items-center">
                                <Label htmlFor='repeat'>Repeat</Label>
                                <Input
                                    type="number"
                                    name="repeat"
                                    id="repeat"
                                    value={fmaosConfig.initialOffset}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Repeat Type */}
                            <div className="mt-2 grid grid-cols-2 gap-base items-center">
                                <Label htmlFor='repeatType'>Repeat Type</Label>
                                <Select name='repeatType'>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="loop">Loop</SelectItem>
                                        <SelectItem value="reverse">Reverse</SelectItem>
                                        <SelectItem value="mirror">Mirror</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Easeing */}
                            <div className="mt-2 grid grid-cols-2 gap-base items-center">
                                <Label htmlFor='easing'>Easing</Label>
                                <Select name='easing'>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="easeIn">Ease In</SelectItem>
                                        <SelectItem value="easeOut">Ease Out</SelectItem>
                                        <SelectItem value="easeInOut">Ease In Out</SelectItem>
                                        <SelectItem value="circIn">Circ In</SelectItem>
                                        <SelectItem value="circOut">Circ Out</SelectItem>
                                        <SelectItem value="circInOut">Circ In Out</SelectItem>
                                        <SelectItem value="backIn">Back In</SelectItem>
                                        <SelectItem value="backOut">Back Out</SelectItem>
                                        <SelectItem value="backInOut">Back In Out</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </ControlWrapper>

                        <ControlWrapper>
                            <Label htmlFor='viewport'>Viewport</Label>

                            {/* Type */}
                            <div className="mt-2 grid grid-cols-2 gap-base items-center">
                                <Label htmlFor='once'>Once</Label>
                                <Select name='once'>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="true">True</SelectItem>
                                        <SelectItem value="false">False</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Margin */}
                            <div className="mt-2 grid grid-cols-2 gap-base items-center">
                                <Label htmlFor='margin'>Margin</Label>
                                <Input
                                    type="number"
                                    name="margin"
                                    id="margin"
                                    value={fmaosConfig.initialOffset}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* margin */}
                            <div className="mt-2 grid grid-cols-2 gap-base items-center">
                                <Label htmlFor='amount'>Amount</Label>
                                <Select name='amount'>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All">All</SelectItem>
                                        <SelectItem value="Some">Some</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </ControlWrapper>
                    </div>
                    <div className="absolute inset-0 bottom-auto w-full h-base bg-gradient-to-b from-background to-transparent pointer-events-none" />
                    <div className="absolute inset-0 top-auto w-full h-base bg-gradient-to-t from-background to-transparent pointer-events-none" />
                </ScrollArea>
            </div>
        </div>
    );
};

export default ConfigController;
