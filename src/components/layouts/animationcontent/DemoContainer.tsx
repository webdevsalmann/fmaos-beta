"use client";
import { useState, cloneElement, ReactElement, useEffect } from "react";
import { cn } from "@/lib/utils";
import ReloadButton from "@/components/layouts/animationcontent/action-buttons/ReloadButton";
import { useFmaosConfig } from "@/components/providers/FmaosConfigProvider";

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
