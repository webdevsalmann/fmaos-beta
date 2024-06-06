"use client"
import { motion, MotionProps } from 'framer-motion';
import { fmaosConfig } from '@/lib/fmaosConfig';

const variants = {
    hidden: { opacity: 0, scale: 1.5, x: 100 },
    visible: { opacity: 1, scale: 1, x: 0 }
};

export default function ZoomOutLeft({ children, ...props }) {
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