"use client";
import { useState, cloneElement, ReactElement, useEffect } from "react";
import { useFmaosConfig } from "@/components/providers/FmaosConfigProvider";
import ReloadButton from "@/components/layouts/maincontent/animationblock/action-buttons/ReloadButton";
import { cn } from "@/lib/utils";

interface DemoContainerProps {
    className?: string;
    animationElement: ReactElement;
}

export default function DemoContainer({ className, animationElement }: DemoContainerProps) {
    const { componentKey } = useFmaosConfig();
    const [key, setKey] = useState(0);
    const reloadAnimation = () => setKey(prevKey => prevKey + 1);

    useEffect(() => {
        setKey(prevKey => prevKey + 1)
    }, [componentKey])

    return (
        <div className={cn("relative p-4 aspect-video bg-gradient-to-br from-red-600 to-red-500 flex-center", className)}>
            <ReloadButton onClick={reloadAnimation} />
            {cloneElement(animationElement, { key })}
        </div>
    );
}
