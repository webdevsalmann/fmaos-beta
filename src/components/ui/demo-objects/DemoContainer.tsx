"use client";
import { useState, cloneElement, ReactElement } from "react";
import ReloadButton from "@/components/ui/demo-objects/ReloadButton";
import Square from "@/components/ui/demo-objects/Square";
import { cn } from "@/lib/utils";

interface DemoContainerProps {
    className?: string,
    animation: ReactElement;
}

export default function DemoContainer({ className, animation }: DemoContainerProps) {
    const [key, setKey] = useState(0);

    const reloadAnimation = () => {
        setKey(prevKey => prevKey + 1);
    };

    return (
        <div className={cn("relative p-4 aspect-video bg-gradient-to-br from-red-700 to-red-500 flex-center", className)}>
            <ReloadButton onClick={reloadAnimation} />
            {cloneElement(animation, { key }, <Square />)}
        </div>
    );
}
