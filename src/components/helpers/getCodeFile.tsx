"use server"

import fs from 'fs';
import path from 'path';

const getCodeFile = async (filePath: string) => {
    try {
        const code = fs.readFileSync(path.join(process.cwd(), filePath), 'utf-8');
        return code;
    } catch (error) {
        console.error(`Error reading file from ${filePath}:`, error);
        throw new Error('Failed to read file');
    }
};

export default getCodeFile;
