"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';

interface FileManagementContextProps {
    downloadableFiles: string[];
    setDownloadableFiles: Dispatch<SetStateAction<string[]>>;
    addFile: (file: string) => void;
    removeFile: (fileName: string) => void;
    clearFiles: () => void;
    selectedConfigFile: "FmaosConfigProvider.tsx" | "FmaosConfigProvider.jsx" | null;
    setSelectedConfigFile: Dispatch<SetStateAction<"FmaosConfigProvider.tsx" | "FmaosConfigProvider.jsx" | null>>;
}

const FileManagementContext = createContext<FileManagementContextProps | undefined>(undefined);

export const FileManagementProvider = ({ children }: { children: ReactNode }) => {
    const [downloadableFiles, setDownloadableFiles] = useState<string[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);
    const [selectedConfigFile, setSelectedConfigFile] = useState<"FmaosConfigProvider.tsx" | "FmaosConfigProvider.jsx" | null>(null);

    useEffect(() => {
        const storedFiles = localStorage.getItem('FMAOSDownloadableFiles');
        if (storedFiles) {
            setDownloadableFiles(JSON.parse(storedFiles));
        }
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('FMAOSDownloadableFiles', JSON.stringify(downloadableFiles));
        }
    }, [downloadableFiles, isInitialized]);

    const addFile = (file: string) => setDownloadableFiles(prevFiles => [...prevFiles, file]);

    const removeFile = (fileName: string) => setDownloadableFiles(prevFiles => prevFiles.filter(file => file !== fileName));

    const clearFiles = () => setDownloadableFiles([]);

    const values = {
        downloadableFiles,
        setDownloadableFiles,
        addFile,
        removeFile,
        clearFiles,
        selectedConfigFile,
        setSelectedConfigFile
    }
    return (
        <FileManagementContext.Provider value={values}>
            {children}
        </FileManagementContext.Provider>
    );
};

export const useFileManagement = () => {
    const context = useContext(FileManagementContext);
    if (!context) {
        throw new Error('useFileManagement must be used within a FileManagementProvider');
    }
    return context;
};
