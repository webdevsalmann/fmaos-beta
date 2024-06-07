import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ConfigContextProps {
    fmaosConfig: typeof initialFmaosConfig;
    setFmaosConfig: React.Dispatch<React.SetStateAction<typeof initialFmaosConfig>>;
}

const initialFmaosConfig: {
    initialOffset: number
} = {
    initialOffset: 50,
};

const ConfigContext = createContext<ConfigContextProps | undefined>(undefined);

export const FmaosConfigProvider = ({ children }: { children: ReactNode }) => {
    const [fmaosConfig, setFmaosConfig] = useState(initialFmaosConfig);

    return (
        <ConfigContext.Provider value={{ fmaosConfig, setFmaosConfig }}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfig = () => {
    const context = useContext(ConfigContext);
    if (!context) {
        throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context;
};
