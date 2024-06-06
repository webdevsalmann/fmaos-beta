"use client";
import { motion, MotionProps } from 'framer-motion';
import { fmaosConfig } from '@/lib/fmaosConfig';

interface FadeProps extends MotionProps {
    children: React.ReactNode;
}

const variants = {
    hidden: { opacity: 0, y: -fmaosConfig.initialOffset },
    visible: { opacity: 1, y: 0 }
};

export default function FadeDown({ children, ...props }: FadeProps) {
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
