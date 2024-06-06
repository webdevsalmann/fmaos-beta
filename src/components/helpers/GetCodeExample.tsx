import fs from 'fs';
import path from 'path';

export default function GetCodeExample({ filePath }: { filePath: string }) {
    const code = fs.readFileSync(path.join(process.cwd(), filePath), 'utf-8');
    return code
}