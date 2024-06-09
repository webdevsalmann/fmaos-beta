"use client";
import React, { ChangeEvent, useCallback } from 'react';
import ControlWrapper from '@/components/layouts/wrapper/ControlWrapper';
import ControllerWrapper from '@/components/layouts/wrapper/ControllerWrapper';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputControl from '@/components/ui/InputControl';
import { useFmaosConfig } from '@/components/providers/FmaosConfigProvider';
import SelectControl from '@/components/ui/SelectControl';

const ConfigController = ({ className }: { className?: string }) => {
    const { fmaosConfig, setFmaosConfig, toggles, setToggle } = useFmaosConfig();

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFmaosConfig(prevConfig => ({ ...prevConfig, [name]: Number(value) }));
        // console.log("fmaosConfig:~ \n", fmaosConfig.transition);
    }, [setFmaosConfig]);

    const handleSelectChange = useCallback((name: string, value: string) => {
        setFmaosConfig(prevConfig => ({ ...prevConfig, [name]: value }));
        // console.log("fmaosConfig:~ \n", fmaosConfig.transition);
    }, [setFmaosConfig]);


    return (
        <ControllerWrapper className={cn(className)}>
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

                <SelectControl
                    label="Type"
                    name="type"
                    value={fmaosConfig.type}
                    onChange={handleSelectChange}
                    include={toggles.includeType}
                    setInclude={(value) => setToggle('includeType', value)}
                    selectOptions={[
                        { value: "tween", label: "Tween" },
                        { value: "spring", label: "Spring" }
                    ]}
                />


                <InputControl
                    label="Stiffness"
                    name="stiffness"
                    value={fmaosConfig.stiffness}
                    onChange={handleInputChange}
                    include={toggles.includeStiffness}
                    setInclude={(value) => setToggle('includeStiffness', value)}
                />

                <InputControl
                    label="Damping"
                    name="damping"
                    value={fmaosConfig.damping}
                    onChange={handleInputChange}
                    include={toggles.includeDamping}
                    setInclude={(value) => setToggle('includeDamping', value)}
                />

                <InputControl
                    label="Mass"
                    name="mass"
                    value={fmaosConfig.mass}
                    onChange={handleInputChange}
                    include={toggles.includeMass}
                    setInclude={(value) => setToggle('includeMass', value)}
                />

                <InputControl
                    label="Duration"
                    name="duration"
                    value={fmaosConfig.duration}
                    onChange={handleInputChange}
                    include={toggles.includeDuration}
                    setInclude={(value) => setToggle('includeDuration', value)}
                />

                <InputControl
                    label="Delay"
                    name="delay"
                    value={fmaosConfig.delay}
                    onChange={handleInputChange}
                    include={toggles.includeDelay}
                    setInclude={(value) => setToggle('includeDelay', value)}
                />

                <InputControl
                    label="Repeat"
                    name="repeat"
                    value={fmaosConfig.repeat}
                    onChange={handleInputChange}
                    include={toggles.includeRepeat}
                    setInclude={(value) => setToggle('includeRepeat', value)}
                />


                <SelectControl
                    label="Repeat Type"
                    name="repeatType"
                    value={fmaosConfig.repeatType || 'loop'}
                    onChange={handleSelectChange}
                    include={toggles.includeRepeatType}
                    setInclude={(value) => setToggle('includeRepeatType', value)}
                    selectOptions={[
                        { value: "loop", label: "Loop" },
                        { value: "reverse", label: "Reverse" },
                        { value: "mirror", label: "Mirror" }
                    ]}
                />

                <SelectControl
                    label="Easing"
                    name="easing"
                    value={fmaosConfig.easing || 'easeIn'}
                    onChange={handleSelectChange}
                    include={toggles.includeEasing}
                    setInclude={(value) => setToggle('includeEasing', value)}
                    selectOptions={[
                        { value: "easeIn", label: "Ease In" },
                        { value: "easeOut", label: "Ease Out" },
                        { value: "easeInOut", label: "Ease In Out" },
                        { value: "circIn", label: "Circ In" },
                        { value: "circOut", label: "Circ Out" },
                        { value: "circInOut", label: "Circ In Out" },
                        { value: "backIn", label: "Back In" },
                        { value: "backOut", label: "Back Out" },
                        { value: "backInOut", label: "Back In Out" }
                    ]}
                />
            </ControlWrapper>
        </ControllerWrapper>
    );
};

export default ConfigController;
