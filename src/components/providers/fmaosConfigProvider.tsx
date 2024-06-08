import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FmaosConfigContextProps {
    fmaosConfig: typeof initialFmaosConfig;
    setFmaosConfig: React.Dispatch<React.SetStateAction<typeof initialFmaosConfig>>;
    toggles: { [key: string]: boolean };
    setToggle: (key: string, value: boolean) => void;
}

const initialFmaosConfig: {
    initialOffset: number;
    transition: object;
    viewport: object;
    stiffness?: number;
    type?: string;
    damping?: number;
    mass?: number;
    duration?: number;
    delay?: number;
    repeat?: number;
    repeatDelay?: number;
    repeatType?: string;
    easing?: string;
} = {
    initialOffset: 50,
    type: 'spring',
    stiffness: undefined,
    damping: undefined,
    mass: undefined,
    duration: undefined,
    delay: undefined,
    repeat: undefined,
    repeatType: "loop",
    repeatDelay: undefined,
    easing: "easeIn",
    transition: {},
    viewport: { once: false, amount: 0.5 },
};

const FmaosConfigContext = createContext<FmaosConfigContextProps | undefined>(undefined);

const buildTransition = (config: typeof initialFmaosConfig, toggles: { [key: string]: boolean }) => {
    const transition: { [key: string]: any } = {};
    if (toggles.includeType) transition.type = config.type;
    if (toggles.includeStiffness) transition.stiffness = config.stiffness;
    if (toggles.includeDamping) transition.damping = config.damping;
    if (toggles.includeMass) transition.mass = config.mass;
    if (toggles.includeDuration) transition.duration = config.duration;
    if (toggles.includeDelay) transition.delay = config.delay;
    if (toggles.includeRepeat) transition.repeat = config.repeat;
    if (toggles.includeRepeatType) transition.repeatType = config.repeatType;
    if (toggles.includeRepeatDelay) transition.repeatDelay = config.repeatDelay;
    if (toggles.includeEasing) transition.ease = config.easing;
    return transition;
};

export const FmaosConfigProvider = ({ children }: { children: ReactNode }) => {
    const [fmaosConfig, setFmaosConfig] = useState(initialFmaosConfig);

    const initialToggles = {
        includeType: true,
        includeStiffness: false,
        includeDamping: false,
        includeMass: false,
        includeDuration: false,
        includeDelay: false,
        includeRepeat: false,
        includeRepeatType: false,
        includeEasing: false,
    };

    const [toggles, setToggles] = useState(initialToggles);

    const setToggle = (key: string, value: boolean) => {
        setToggles(prevToggles => ({ ...prevToggles, [key]: value }));
    };

    const values = {
        fmaosConfig: { ...fmaosConfig, transition: buildTransition(fmaosConfig, toggles) },
        setFmaosConfig,
        toggles,
        setToggle,
        setToggles
    };

    return (
        <FmaosConfigContext.Provider value={values}>
            {children}
        </FmaosConfigContext.Provider>
    );
};

export const useFmaosConfig = () => {
    const context = useContext(FmaosConfigContext);
    if (!context) {
        throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context;
};
