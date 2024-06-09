"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FmaosConfigContextProps {
    fmaosConfig: typeof initialFmaosConfig;
    setFmaosConfig: React.Dispatch<React.SetStateAction<typeof initialFmaosConfig>>;
    toggles: { [key: string]: boolean };
    setToggle: (key: string, value: boolean) => void;
}

interface FmaosConfigProps {
    initialOffset: number;
    transition: object;
    viewport: object;
    type?: string;
    stiffness?: number;
    damping?: number;
    mass?: number;
    duration?: number;
    delay?: number;
    repeat?: number;
    repeatDelay?: number;
    repeatType?: string;
    easing?: string;
    once?: boolean;
    margin?: string;
    amount?: "some" | "all";
}

const initialFmaosConfig: FmaosConfigProps = {
    initialOffset: 50,
    transition: { type: "spring" },
    viewport: { once: false },
    type: "spring",
    stiffness: 100,
    damping: 10,
    mass: 1,
    duration: 0.3,
    delay: 0,
    repeat: 0,
    repeatType: "loop",
    repeatDelay: 0,
    easing: "easeIn",
    once: false,
    amount: "all",
};

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
    includeOnce: true,
    includeAmount: false,
};

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

const buildViewport = (config: typeof initialFmaosConfig, toggles: { [key: string]: boolean }) => {
    const viewport: { [key: string]: any } = {};
    if (toggles.includeOnce) viewport.once = config.once;
    if (toggles.includeAmount) viewport.amount = config.amount;
    return viewport;
};

const FmaosConfigContext = createContext<FmaosConfigContextProps | undefined>(undefined);

export const FmaosConfigProvider = ({ children }: { children: ReactNode }) => {
    const [fmaosConfig, setFmaosConfig] = useState(initialFmaosConfig);
    const [toggles, setToggles] = useState(initialToggles);

    const setToggle = (key: string, value: boolean) => {
        setToggles(prevToggles => ({ ...prevToggles, [key]: value }));
    };

    const values = {
        fmaosConfig: {
            ...fmaosConfig,
            transition: buildTransition(fmaosConfig, toggles),
            viewport: buildViewport(fmaosConfig, toggles),
        },
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
