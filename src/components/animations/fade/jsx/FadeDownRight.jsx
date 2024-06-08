"use client";
import { motion } from 'framer-motion';
import { useFmaosConfig } from '@/components/providers/FmaosConfigProvider';

const variants = (initialOffset) => ({
    hidden: { opacity: 0, x: -initialOffset, y: -initialOffset },
    visible: { opacity: 1, x: 0, y: 0 }
});

export default function FadeDownRight({ children, ...props }) {
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
