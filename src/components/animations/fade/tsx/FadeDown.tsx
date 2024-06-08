"use client";
import { motion, MotionProps } from 'framer-motion';
import { useFmaosConfig } from '@/components/providers/FmaosConfigProvider';

interface FadeProps extends MotionProps {
    children: React.ReactNode;
}

const variants = (initialOffset: number) => ({
    hidden: { opacity: 0, y: -initialOffset },
    visible: { opacity: 1, y: 0 }
});

export default function FadeDown({ children, ...props }: FadeProps) {
    const { fmaosConfig } = useFmaosConfig();

    return (
        <motion.div
            variants={variants(Number(fmaosConfig.initialOffset))}
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
