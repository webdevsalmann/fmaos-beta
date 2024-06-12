export function generateJSXFmaosConfig(fmaosConfig: any, toggles: any) {
    return `
"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

const initialFmaosConfig = {
    initialOffset: ${fmaosConfig.initialOffset},
    transition: {
        type: "${fmaosConfig.type}",${toggles.includeStiffness ? `
        stiffness: ${fmaosConfig.stiffness},` : ''}${toggles.includeDamping ? `
        damping: ${fmaosConfig.damping},` : ''}${toggles.includeMass ? `
        mass: ${fmaosConfig.mass},` : ''}${toggles.includeDuration ? `
        duration: ${fmaosConfig.duration},` : ''}${toggles.includeDelay ? `
        delay: ${fmaosConfig.delay},` : ''}${toggles.includeRepeat ? `
        repeat: ${fmaosConfig.repeat},` : ''}${toggles.includeRepeatType ? `
        repeatType: "${fmaosConfig.repeatType}",` : ''}${toggles.includeEasing ? `
        easing: "${fmaosConfig.easing}",` : ''}
    },
    viewport: {
        once: ${fmaosConfig.once},
        amount: "${fmaosConfig.amount}",
    },
};

const FmaosConfigContext = createContext();

export const FmaosConfigProvider = ({ children }) => {
    const [fmaosConfig, setFmaosConfig] = useState(initialFmaosConfig);

    return (
        <FmaosConfigContext.Provider value={{ fmaosConfig, setFmaosConfig }}>
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
`;
}

export function generateTSXFmaosConfig(fmaosConfig: any, toggles: any) {
    return `
"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FmaosConfigContextProps {
    fmaosConfig: typeof initialFmaosConfig;
    setFmaosConfig: React.Dispatch<React.SetStateAction<typeof initialFmaosConfig>>;
}

interface FmaosConfigProps {
    initialOffset: number;
    transition: object;
    viewport: object;
}

const initialFmaosConfig: FmaosConfigProps = {
    initialOffset: ${fmaosConfig.initialOffset},
    transition: {
        type: "${fmaosConfig.type}",${toggles.includeStiffness ? `
        stiffness: ${fmaosConfig.stiffness},` : ''}${toggles.includeDamping ? `
        damping: ${fmaosConfig.damping},` : ''}${toggles.includeMass ? `
        mass: ${fmaosConfig.mass},` : ''}${toggles.includeDuration ? `
        duration: ${fmaosConfig.duration},` : ''}${toggles.includeDelay ? `
        delay: ${fmaosConfig.delay},` : ''}${toggles.includeRepeat ? `
        repeat: ${fmaosConfig.repeat},` : ''}${toggles.includeRepeatType ? `
        repeatType: "${fmaosConfig.repeatType}",` : ''}${toggles.includeEasing ? `
        easing: "${fmaosConfig.easing}",` : ''}
    },
    viewport: {
        once: ${fmaosConfig.once},
        amount: "${fmaosConfig.amount}",
    },
};

const FmaosConfigContext = createContext<FmaosConfigContextProps | undefined>(undefined);

export const FmaosConfigProvider = ({ children }: { children: ReactNode }) => {
    const [fmaosConfig, setFmaosConfig] = useState(initialFmaosConfig);

    const values = {
        fmaosConfig,
        setFmaosConfig,
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
`;
}
