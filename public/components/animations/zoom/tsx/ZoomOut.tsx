"use client"
import { motion, MotionProps } from 'framer-motion';
import { fmaosConfig } from '@/lib/fmaos/config';

interface ZoomProps extends MotionProps {
    children: React.ReactNode;
}

const variants = {
    hidden: { scale: 1.5 },
    visible: { scale: 1 }
};

export default function ZoomOut({ children, ...props }: ZoomProps) {
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
