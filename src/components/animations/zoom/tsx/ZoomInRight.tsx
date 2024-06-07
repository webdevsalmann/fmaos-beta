"use client"
import { motion, MotionProps } from 'framer-motion';
import { fmaosConfig } from '@/lib/fmaosConfig';

interface ZoomProps extends MotionProps {
    children: React.ReactNode;
}

const variants = {
    hidden: { opacity: 0, scale: 0.5, x: fmaosConfig.initialOffset },
    visible: { opacity: 1, scale: 1, x: 0 }
};

export default function ZoomInRight({ children, ...props }: ZoomProps) {
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
