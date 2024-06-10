"use client"
import { MotionProps, motion } from 'framer-motion';
import { useFmaosConfig } from '@/components/providers/FmaosConfigProvider';

const variants = (initialOffset) => ({
    hidden: { opacity: 0, rotateX: -90 },
    visible: { opacity: 1, rotateX: 0 }
});

export default function FlipUp({ children, ...props }) {
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
