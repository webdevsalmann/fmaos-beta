"use client";
import { motion, MotionProps } from 'framer-motion';
import { useFmaosConfig } from '@/components/providers/FmaosConfigProvider';

interface FadeProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
}

const variants = (initialOffset: number) => ({
    hidden: { opacity: 0, y: initialOffset },
    visible: { opacity: 1, y: 0 }
});

export default function FadeUp({ children, className, ...props }: FadeProps) {
    const { fmaosConfig } = useFmaosConfig();
    return (
        <motion.div
            className={className}
            variants={variants(fmaosConfig.initialOffset)}
            initial={props.initial ?? "hidden"}
            whileInView={props.whileInView ?? "visible"}
            transition={props.transition ?? fmaosConfig.transition}
            viewport={props.viewport ?? fmaosConfig.viewport}
            {...props}
        >
            {children}
        </motion.div>
    );
}
