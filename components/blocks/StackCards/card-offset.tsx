"use client";

import { cn } from "@/lib/utilities/cn";
import { motion, useTransform } from "motion/react";
import { useStackingCardsContext, type StackingCardProps } from "./context";

const SCALE_MULTIPLIER = 0.07;

// Cards stack with a fixed top offset per index, scaling down from the top edge
const StackingCardOffset = ({
    index,
    className,
    children,
    ...props
}: StackingCardProps) => {
    const {progress, totalCards = 0} = useStackingCardsContext();
    const rangeScale = [index * (1 / totalCards), 1];
    const scaleTo = 1 - (totalCards - index) * SCALE_MULTIPLIER;
    const scale = useTransform(progress, rangeScale, [1, scaleTo]);
    const top = `${index * 2}%`;

    return (
        <div
            data-slot="stacking-card-offset"
            className={cn("sticky top-0 grid h-screen place-items-center")}>
            <motion.div
                className={cn("relative origin-top", className)}
                style={{top, scale}}
                {...props}>
                {children}
            </motion.div>
        </div>
    );
};

export { StackingCardOffset };

