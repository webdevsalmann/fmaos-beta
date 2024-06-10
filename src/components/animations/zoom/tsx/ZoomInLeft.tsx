"use client"
import { motion, MotionProps } from 'framer-motion';
import { useFmaosConfig } from '@/components/providers/FmaosConfigProvider';

interface ZoomProps extends MotionProps {
    children: React.ReactNode;
}

const variants = (initialOffset: number) => ({
    hidden: { opacity: 0, scale: 0.5, x: -initialOffset },
    visible: { opacity: 1, scale: 1, x: 0 }
});

export default function ZoomInLeft({ children, ...props }: ZoomProps) {
    const { fmaosConfig } = useFmaosConfig();

    return (
        <motion.div
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
