"use client";
import { motion } from 'framer-motion';
import { fmaosConfig } from '@/lib/fmaosConfig';

const variants = {
    hidden: { opacity: 0, y: fmaosConfig.initialOffset },
    visible: { opacity: 1, y: 0 }
};

export default function FadeUp({ children, ...props }) {
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