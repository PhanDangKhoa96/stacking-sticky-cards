"use client";

import {cn} from "@/lib/utilities/cn";
import {getSymmetricOffset} from "@/lib/utilities/get-symmetric-offset";
import {motion, useTransform} from "motion/react";
import {useState, type PropsWithChildren} from "react";
import {useStackingCardsContext, type StackingCardProps} from "./context";

const TRANSLATE_X_RANGE = 40;

const StackingCardSpreadFlip = ({
    index,
    className,
    children,
    ...props
}: StackingCardProps) => {
    const {progress, totalCards = 0} = useStackingCardsContext();

    const xValue = getSymmetricOffset(index, totalCards, TRANSLATE_X_RANGE);
    const staggeredProgress = useTransform(progress, (v) => v - index * 0.02);
    const x = useTransform(progress, [0.45, 0.7], [0, xValue]);
    const rotateY = useTransform(staggeredProgress, [0.7, 0.85], [0, -180]);

    return (
        <motion.div
            data-slot="stacking-card-spread-flip"
            className={cn("relative transform-3d", className)}
            style={{x, rotateY}}
            {...props}>
            {children}
        </motion.div>
    );
};

// Animated container used by StackingCardsWrapper when children are StackingCardSpreadFlip.
// Animates the deck's width, height, and scale as the user scrolls.
const SpreadFlipContainer = ({children}: PropsWithChildren<{}>) => {
    const {progress} = useStackingCardsContext();
    const [ranges] = useState(() => {
        const mobile = typeof window !== "undefined" && window.innerWidth < 768;
        return mobile
            ? {width: ["45vw", "90vw"] as [string, string], height: ["60vw", "42vw"] as [string, string]}
            : {width: ["20vw", "80vw"] as [string, string], height: ["28vw", "37.3vw"] as [string, string]};
    });
    const width = useTransform(progress, [0, 0.4], ranges.width);
    const height = useTransform(progress, [0, 0.4], ranges.height);
    const scale = useTransform(progress, [0.45, 0.7], [1, 0.8]);

    return (
        <div
            className="h-[350vh]"
            data-slot="stacking-card-spread-flip-container">
            <div className="sticky top-0 grid h-screen place-items-center">
                <motion.div className="flex" style={{width, height, scale}}>
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

export {StackingCardSpreadFlip, SpreadFlipContainer};
