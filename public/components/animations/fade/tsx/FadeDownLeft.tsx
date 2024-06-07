"use client";
import { motion, MotionProps } from 'framer-motion';
import { fmaosConfig } from '@/lib/fmaos/config';

interface FadeProps extends MotionProps {
    children: React.ReactNode;
}

const variants = {
    hidden: { opacity: 0, x: fmaosConfig.initialOffset, y: -fmaosConfig.initialOffset },
    visible: { opacity: 1, x: 0, y: 0 }
};

export default function FadeDownLeft({ children, ...props }: FadeProps) {
    return (
        <motion.div
            variants={variants}
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
