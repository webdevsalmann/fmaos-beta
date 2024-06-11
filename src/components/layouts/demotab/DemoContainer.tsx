"use client";
import { useState, cloneElement, ReactElement } from "react";
import { MotionProps } from 'framer-motion';
import { cn } from "@/lib/utils";
import ReloadButton from "@/components/layouts/demotab/ReloadButton";

interface DemoContainerProps {
    className?: string;
    animationElement: ReactElement;
    animationProps?: MotionProps;
}

export default function DemoContainer({ className, animationElement, animationProps }: DemoContainerProps) {
    const [key, setKey] = useState(0);
    const reloadAnimation = () => setKey(prevKey => prevKey + 1);

    return (
        <div className={cn("relative p-4 aspect-video bg-gradient-to-br from-red-600 to-red-500 flex-center", className)}>
            <ReloadButton onClick={reloadAnimation} />
            {cloneElement(animationElement, { key })}
        </div>
    );
}
