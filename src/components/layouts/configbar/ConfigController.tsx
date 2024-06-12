"use client";
import React, { ChangeEvent, useCallback } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputControl from '@/components/layouts/configbar/InputControl';
import { useFmaosConfig } from '@/components/providers/FmaosConfigProvider';
import SelectControl from '@/components/layouts/configbar/SelectControl';

const ConfigController = () => {
    const { fmaosConfig, setFmaosConfig, toggles, setToggle, setComponentKey } = useFmaosConfig();

    const handleInputChangeNumber = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFmaosConfig(prevConfig => ({ ...prevConfig, [name]: Number(value) }));
        setComponentKey((prevKey: any) => Number(prevKey) + 1)
    }, [setFmaosConfig, setComponentKey]);

    const handleSelectChange = useCallback((name: string, value: string) => {
        setFmaosConfig(prevConfig => ({ ...prevConfig, [name]: value }));
        setComponentKey((prevKey: any) => Number(prevKey) + 1)
    }, [setFmaosConfig, setComponentKey]);


    return (
        <div className="divide-y">
            <div className="p-2">
                <div className="p-2 bg-muted dark:bg-muted/50 grid grid-cols-2 gap-base items-center rounded-sm">
                    <Label htmlFor='initialOffset'>Initial Offset</Label>
                    <Input
                        type="number"
                        name="initialOffset"
                        id="initialOffset"
                        value={fmaosConfig.initialOffset}
                        onChange={handleInputChangeNumber}
                    />
                </div>
            </div>

            <div className="p-2">
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
                    mustInclude
                />

                <InputControl
                    label="Stiffness"
                    name="stiffness"
                    value={fmaosConfig.stiffness}
                    onChange={handleInputChangeNumber}
                    include={toggles.includeStiffness}
                    setInclude={(value) => setToggle('includeStiffness', value)}
                />

                <InputControl
                    label="Damping"
                    name="damping"
                    value={fmaosConfig.damping}
                    onChange={handleInputChangeNumber}
                    include={toggles.includeDamping}
                    setInclude={(value) => setToggle('includeDamping', value)}
                />

                <InputControl
                    label="Mass"
                    name="mass"
                    value={fmaosConfig.mass}
                    onChange={handleInputChangeNumber}
                    include={toggles.includeMass}
                    setInclude={(value) => setToggle('includeMass', value)}
                />

                <InputControl
                    label="Duration"
                    name="duration"
                    value={fmaosConfig.duration}
                    onChange={handleInputChangeNumber}
                    include={toggles.includeDuration}
                    setInclude={(value) => setToggle('includeDuration', value)}
                />

                <InputControl
                    label="Delay"
                    name="delay"
                    value={fmaosConfig.delay}
                    onChange={handleInputChangeNumber}
                    include={toggles.includeDelay}
                    setInclude={(value) => setToggle('includeDelay', value)}
                />

                <InputControl
                    label="Repeat"
                    name="repeat"
                    value={fmaosConfig.repeat}
                    onChange={handleInputChangeNumber}
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
            </div>

            <div className="p-2">
                <Label htmlFor='viewport'>Viewport</Label>

                <SelectControl
                    label="Once"
                    name="once"
                    value={fmaosConfig.once || false}
                    onChange={handleSelectChange}
                    include={toggles.includeOnce}
                    setInclude={(value) => setToggle('includeOnce', value)}
                    selectOptions={[
                        { value: true, label: "True" },
                        { value: false, label: "False" },
                    ]}
                    mustInclude
                />

                <SelectControl
                    label="Amount"
                    name="amount"
                    value={fmaosConfig.amount || "all"}
                    onChange={handleSelectChange}
                    include={toggles.includeAmount}
                    setInclude={(value) => setToggle('includeAmount', value)}
                    selectOptions={[
                        { value: "some", label: "Some" },
                        { value: "all", label: "All" },
                    ]}
                />

            </div>
        </div>
    );
};

export default ConfigController;
