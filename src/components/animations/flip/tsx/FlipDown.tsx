"use client"
import { motion, MotionProps } from 'framer-motion';
import { useFmaosConfig } from '@/components/providers/FmaosConfigProvider';

interface FlipProps extends MotionProps {
    children: React.ReactNode;
}

const variants = (initialOffset: number) => ({
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0 }
});

export default function FlipDown({ children, ...props }: FlipProps) {
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
