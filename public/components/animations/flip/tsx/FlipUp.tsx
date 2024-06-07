"use client"
import { MotionProps, motion } from 'framer-motion';
import { fmaosConfig } from '@/lib/fmaos/config';

interface FlipProps extends MotionProps {
    children: React.ReactNode;
}

const variants = {
    hidden: { opacity: 0, rotateX: -90 },
    visible: { opacity: 1, rotateX: 0 }
};

export default function FlipUp({ children, ...props }: FlipProps) {
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
