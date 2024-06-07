"use client";
import { useState, cloneElement, ReactElement } from "react";
import { MotionProps } from 'framer-motion';
import { cn } from "@/lib/utils";
import ReloadButton from "@/components/ui/demo-objects/ReloadButton";
import { useConfig } from '@/components/providers/fmaosConfigProvider';

interface DemoContainerProps {
    className?: string;
    animationElement: ReactElement;
    animationProps?: MotionProps;
}

export default function DemoContainer({ className, animationElement, animationProps }: DemoContainerProps) {
    const [key, setKey] = useState(0);
    const { fmaosConfig } = useConfig();

    const reloadAnimation = () => setKey(prevKey => prevKey + 1);

    const combinedProps = {
        initial: { opacity: 0, y: Number(fmaosConfig.initialOffset) },
        ...animationProps
    };


    return (
        <div className={cn("relative p-4 aspect-video bg-gradient-to-br from-red-600 to-red-500 flex-center", className)}>
            <ReloadButton onClick={reloadAnimation} />
            {cloneElement(animationElement, { key, ...combinedProps })}
        </div>
    );
}
