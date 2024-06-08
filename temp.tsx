
export default function temp() {
    return (
        <>
        
        <ControlWrapper>
                <Label htmlFor='transition'>Transition</Label>

                <InputControl
                    label="Type"
                    name="type"
                    value={fmaosConfig.type || 'tween'}
                    onChange={handleInputChange}
                    include={toggles.includeType}
                    setInclude={(value) => setToggle('includeType', value)}
                    type="select"
                    selectOptions={[
                        { value: "tween", label: "Tween" },
                        { value: "spring", label: "Spring" }
                    ]}
                />

                <InputControl
                    label="Stiffness"
                    name="stiffness"
                    value={fmaosConfig.stiffness || 0}
                    onChange={handleInputChange}
                    include={toggles.includeStiffness}
                    setInclude={(value) => setToggle('includeStiffness', value)}
                />

                <InputControl
                    label="Damping"
                    name="damping"
                    value={fmaosConfig.damping || 0}
                    onChange={handleInputChange}
                    include={toggles.includeDamping}
                    setInclude={(value) => setToggle('includeDamping', value)}
                />

                <InputControl
                    label="Mass"
                    name="mass"
                    value={fmaosConfig.mass || 0}
                    onChange={handleInputChange}
                    include={toggles.includeMass}
                    setInclude={(value) => setToggle('includeMass', value)}
                />

                <InputControl
                    label="Duration"
                    name="duration"
                    value={fmaosConfig.duration || 0}
                    onChange={handleInputChange}
                    include={toggles.includeDuration}
                    setInclude={(value) => setToggle('includeDuration', value)}
                />

                <InputControl
                    label="Delay"
                    name="delay"
                    value={fmaosConfig.delay || 0}
                    onChange={handleInputChange}
                    include={toggles.includeDelay}
                    setInclude={(value) => setToggle('includeDelay', value)}
                />

                <InputControl
                    label="Repeat"
                    name="repeat"
                    value={fmaosConfig.repeat || 0}
                    onChange={handleInputChange}
                    include={toggles.includeRepeat}
                    setInclude={(value) => setToggle('includeRepeat', value)}
                />

                <InputControl
                    label="Repeat Type"
                    name="repeatType"
                    value={fmaosConfig.repeatType || 'loop'}
                    onChange={handleInputChange}
                    include={toggles.includeRepeatType}
                    setInclude={(value) => setToggle('includeRepeatType', value)}
                    type="select"
                    selectOptions={[
                        { value: "loop", label: "Loop" },
                        { value: "reverse", label: "Reverse" },
                        { value: "mirror", label: "Mirror" }
                    ]}
                />

                <InputControl
                    label="Easing"
                    name="easing"
                    value={fmaosConfig.easing || 'easeIn'}
                    onChange={handleInputChange}
                    include={toggles.includeEasing}
                    setInclude={(value) => setToggle('includeEasing', value)}
                    type="select"
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
        </>
    )
}
