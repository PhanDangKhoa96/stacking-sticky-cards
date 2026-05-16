"use client";

import {cn} from "@/lib/utilities/cn";
import {motion, useTransform} from "motion/react";
import {useStackingCardsContext, type StackingCardProps} from "./context";

const SCALE_MULTIPLIER = 0.07;

// Each card scales down progressively as it goes deeper in the stack
const StackingCardScale = ({
    index,
    className,
    children,
    ...props
}: StackingCardProps) => {
    const {progress, totalCards = 0} = useStackingCardsContext();
    const rangeScale = [index * (1 / totalCards), 1];
    const scaleTo = 1 - (totalCards - index) * SCALE_MULTIPLIER;
    const scale = useTransform(progress, rangeScale, [1, scaleTo]);

    return (
        <div
            data-slot="stacking-card-scale"
            className={cn("sticky top-0 grid h-screen place-items-center")}>
            <motion.div
                className={cn("relative", className)}
                style={{scale}}
                {...props}>
                {children}
            </motion.div>
        </div>
    );
};

export {StackingCardScale};
